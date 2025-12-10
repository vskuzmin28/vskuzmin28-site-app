import fs from 'fs';
import path from 'path';
import { DeployFile } from './deploy-types.ts';

/**
 * Сканирует папку и возвращает список файлов
 */
export function scanDirectory(
  dirPath: string, 
  targetDir: string
): DeployFile[] {
  const files: DeployFile[] = [];
  
  function scan(currentPath: string, basePath: string) {
    const items = fs.readdirSync(currentPath);
    
    items.forEach(item => {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scan(fullPath, basePath);
      } else {
        const relativePath = path.relative(basePath, fullPath);
        files.push({
          localPath: fullPath,
          remotePath: path.posix.join(targetDir, relativePath).replace(/\\/g, '/'),
          size: stat.size
        });
      }
    });
  }
  
  scan(dirPath, dirPath);
  return files;
}

/**
 * Проверяет наличие и доступность папки dist
 */
export function checkDistFolder(): boolean {
  const distPath = path.join(process.cwd(), 'dist');
  const indexPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(distPath)) {
    console.error('❌ Папка dist не найдена');
    return false;
  }
  
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Файл index.html не найден в папке dist');
    return false;
  }
  
  return true;
}

/**
 * Форматирует размер файла
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

/**
 * Вычисляет общий размер файлов
 */
export function getTotalSize(files: DeployFile[]): number {
  return files.reduce((total, file) => total + file.size, 0);
}