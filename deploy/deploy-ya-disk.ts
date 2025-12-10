import fs from 'fs';
import path from 'path';
import https from 'https';
import { DeployFile, DeployConfig, UploadResponse } from './deploy-types.ts';

export class YandexDiskDeployer {
  private token: string;
  private targetDir: string;
  private concurrentUploads: number;
  private uploadUrlCache = new Map<string, string>();

  constructor(config: DeployConfig) {
    this.token = config.token;
    this.targetDir = config.targetDir;
    this.concurrentUploads = config.concurrentUploads;
  }

  /**
   * Получает URL для загрузки файла
   */
  private async getUploadUrl(remotePath: string): Promise<string> {
    const cachedUrl = this.uploadUrlCache.get(remotePath);
    if (cachedUrl) {
      return cachedUrl;
    }
    
    return new Promise((resolve, reject) => {
      const options: https.RequestOptions = {
        hostname: 'cloud-api.yandex.net',
        path: `/v1/disk/resources/upload?path=${encodeURIComponent(remotePath)}&overwrite=true`,
        method: 'GET',
        headers: { 'Authorization': `OAuth ${this.token}` }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk: Buffer) => {
          data += chunk.toString();
        });
        res.on('end', () => {
          try {
            const json: UploadResponse = JSON.parse(data);
            if (json.href) {
              this.uploadUrlCache.set(remotePath, json.href);
              resolve(json.href);
            } else {
              reject(new Error('Яндекс.Диск не вернул URL для загрузки'));
            }
          } catch {
            reject(new Error('Неверный ответ от Яндекс.Диска'));
          }
        });
      });

      req.on('error', reject);
      req.end();
    });
  }

  /**
   * Загружает один файл на Яндекс.Диск
   */
  private async uploadSingleFile(file: DeployFile): Promise<boolean> {
    try {
      const uploadUrl = await this.getUploadUrl(file.remotePath);
      
      await new Promise<void>((resolve, reject) => {
        const fileStream = fs.createReadStream(file.localPath);
        const req = https.request(uploadUrl, {
          method: 'PUT',
          headers: { 'Content-Length': file.size.toString() }
        }, (res) => {
          if (res.statusCode === 201 || res.statusCode === 200) {
            resolve();
          } else {
            reject(new Error(`HTTP ${res.statusCode}`));
          }
        });
        
        req.on('error', reject);
        fileStream.pipe(req);
      });
      
      return true;
    } catch (error) {
      console.error(`  ❌ ${path.basename(file.localPath)}: ${error instanceof Error ? error.message : 'Ошибка'}`);
      return false;
    }
  }

  /**
   * Создает папки на Яндекс.Диске
   */
  public async createFolders(files: DeployFile[]): Promise<void> {
    const folders = new Set<string>();
    files.forEach(file => {
      const dir = path.dirname(file.remotePath);
      if (dir !== '/') folders.add(dir);
    });

    console.log(`📁 Создание ${folders.size} папок`);

    let created = 0;
    for (const folder of folders) {
      try {
        await new Promise<void>((resolve, reject) => {
          const options: https.RequestOptions = {
            hostname: 'cloud-api.yandex.net',
            path: `/v1/disk/resources?path=${encodeURIComponent(folder)}`,
            method: 'PUT',
            headers: { 'Authorization': `OAuth ${this.token}` }
          };

          const req = https.request(options, (res) => {
            if (res.statusCode === 201) {
              created++;
              resolve();
            } else if (res.statusCode === 409) {
              resolve(); // Папка уже существует
            } else {
              reject(new Error(`HTTP ${res.statusCode}`));
            }
          });
          
          req.on('error', reject);
          req.end();
        });
      } catch {
        // Игнорируем ошибки создания папок
      }
    }

    if (created > 0) {
      console.log(`✅ Создано папок: ${created}`);
    }
  }

  /**
   * Параллельная загрузка файлов
   */
  public async uploadFiles(files: DeployFile[]): Promise<number> {
    if (files.length === 0) {
      return 0;
    }

    const results: PromiseSettledResult<boolean>[] = [];
    const chunks: DeployFile[][] = [];
    
    // Разбиваем на чанки для параллельной загрузки
    for (let i = 0; i < files.length; i += this.concurrentUploads) {
      chunks.push(files.slice(i, i + this.concurrentUploads));
    }
    
    console.log(`📦 Загрузка ${files.length} файлов (${chunks.length} пакетов)`);
    
    for (let i = 0; i < chunks.length; i++) {
      const batchNumber = i + 1;
      const batchSize = chunks[i].length;
      
      console.log(`📦 Пакет ${batchNumber}/${chunks.length} (${batchSize} файлов)`);
      
      const batchPromises = chunks[i].map(file => this.uploadSingleFile(file));
      const batchResults = await Promise.allSettled(batchPromises);
      
      results.push(...batchResults);
    }
    
    const successCount = results.filter(r => r.status === 'fulfilled').length;
    return successCount;
  }

  /**
   * Получает информацию о Яндекс.Диске
   */
  public async getDiskInfo(): Promise<any> {
    return new Promise((resolve, reject) => {
      const options: https.RequestOptions = {
        hostname: 'cloud-api.yandex.net',
        path: '/v1/disk/',
        method: 'GET',
        headers: { 'Authorization': `OAuth ${this.token}` }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk: Buffer) => {
          data += chunk.toString();
        });
        res.on('end', () => {
          if (res.statusCode === 200) {
            try {
              resolve(JSON.parse(data));
            } catch {
              resolve({});
            }
          } else {
            reject(new Error(`HTTP ${res.statusCode}`));
          }
        });
      });
      
      req.on('error', reject);
      req.end();
    });
  }
}