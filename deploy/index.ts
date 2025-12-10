#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { getConfig, validateConfig } from './deploy-config.ts';
import { scanDirectory, checkDistFolder, getTotalSize, formatFileSize } from './deploy-utils.ts';
import { parseCliArgs, showHelp, showVersion } from './deploy-cli.ts';
import { YandexDiskDeployer } from './deploy-ya-disk.ts';

async function main() {
  const args = process.argv.slice(2);
  const cliOptions = parseCliArgs(args);

  // Обработка help и version
  if (cliOptions.help) {
    showHelp();
    return;
  }

  if (cliOptions.version) {
    showVersion();
    return;
  }

  console.log('🚀 Яндекс.Диск Деплой');
  console.log('─'.repeat(40));

  // Проверяем наличие dist папки
  if (!checkDistFolder()) {
    console.log('💡 Сначала соберите проект: npm run build');
    process.exit(1);
  }

  // Получаем конфигурацию
  const config = getConfig();
  
  // Переопределяем настройки из CLI
  if (cliOptions.target) {
    config.targetDir = cliOptions.target;
  }
  if (cliOptions.concurrency) {
    config.concurrentUploads = cliOptions.concurrency;
  }

  validateConfig(config);

  console.log(`📁 Папка назначения: ${config.targetDir}`);
  console.log(`⚡ Параллельных загрузок: ${config.concurrentUploads}`);

  if (cliOptions.dryRun) {
    console.log('🧪 ТЕСТОВЫЙ РЕЖИМ (файлы не будут загружены)');
  }

  // Получаем список файлов
  const distPath = path.join(process.cwd(), 'dist');
  const files = scanDirectory(distPath, config.targetDir);

  if (files.length === 0) {
    console.error('❌ В папке dist нет файлов');
    process.exit(1);
  }

  const totalSize = getTotalSize(files);
  console.log(`📦 Файлов: ${files.length}`);
  console.log(`📊 Общий размер: ${formatFileSize(totalSize)}`);

  if (cliOptions.dryRun) {
    console.log('\n✅ Тестовый режим завершен');
    console.log(`📁 Файлы будут загружены в: ${config.targetDir}`);
    return;
  }

  // Запускаем деплой
  const startTime = Date.now();
  const deployer = new YandexDiskDeployer(config);
  
  try {
    // Проверяем токен
    console.log('\n🔍 Проверка подключения');
    const diskInfo = await deployer.getDiskInfo();
    console.log('✅ Подключение к Яндекс.Диску установлено');

    // Создаем папки
    await deployer.createFolders(files);

    // Загружаем файлы
    console.log('\n📤 Загрузка файлов');
    const success = await deployer.uploadFiles(files);

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log('\n' + '='.repeat(50));
    console.log(`✅ Успешно: ${success}/${files.length} файлов`);
    console.log(`⏱️  Время: ${duration} секунд`);
    
    console.log('='.repeat(50));

  } catch (error) {
    console.error('\n💥 Ошибка деплоя:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

// Обработка ошибок
main().catch(error => {
  console.error('💥 Фатальная ошибка:', error instanceof Error ? error.message : error);
  process.exit(1);
});