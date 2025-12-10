// deploy/deploy-config.ts
import fs from 'fs';

export interface DeployConfig {
  token: string;
  targetDir: string;
  concurrentUploads: number;
}

export function getConfig(): DeployConfig {
  let token = process.env.YANDEX_DISK_TOKEN_PROD || '';
  let targetDir = process.env.YANDEX_TARGET_DIR || '/vskuzmin28-site-app/';
  const CONCURRENT_UPLOADS = 100;

  // Читаем из .env если нет в переменных окружения
  if (!token && fs.existsSync('.env')) {
    try {
      const envContent = fs.readFileSync('.env', 'utf8');
      const tokenMatch = envContent.match(/YANDEX_DISK_TOKEN_PROD=([^\n]+)/);
      const pathMatch = envContent.match(/YANDEX_TARGET_DIR=([^\n]+)/);
      if (tokenMatch) token = tokenMatch[1].trim();
      if (pathMatch) targetDir = pathMatch[1].trim();
    } catch {
      // Игнорируем ошибки чтения файла
    }
  }

  // Нормализуем путь
  if (!targetDir.startsWith('/')) targetDir = '/' + targetDir;
  if (!targetDir.endsWith('/')) targetDir += '/';

  return { token, targetDir, concurrentUploads: CONCURRENT_UPLOADS };
}

export function validateConfig(config: DeployConfig): void {
  if (!config.token) {
    console.error('❌ YANDEX_DISK_TOKEN_PROD не установлен');
    console.log('💡 Установите переменную:');
    console.log('   PowerShell: $env:YANDEX_DISK_TOKEN_PROD="ваш_токен"');
    console.log('💡 Или создайте .env файл с:');
    console.log('   YANDEX_DISK_TOKEN_PROD=ваш_токен');
    process.exit(1);
  }
}