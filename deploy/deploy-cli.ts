export interface CliOptions {
  help?: boolean;
  version?: boolean;
  dryRun?: boolean;
  verbose?: boolean;
  target?: string;
  concurrency?: number;
}

/**
 * Парсит аргументы командной строки
 */
export function parseCliArgs(args: string[]): CliOptions {
  const options: CliOptions = {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '--help':
      case '-h':
        options.help = true;
        break;
        
      case '--version':
      case '-v':
        options.version = true;
        break;
        
      case '--dry-run':
      case '--dry':
        options.dryRun = true;
        break;
        
      case '--verbose':
        options.verbose = true;
        break;
        
      case '--target':
      case '-t':
        if (i + 1 < args.length) {
          options.target = args[i + 1];
          i++;
        }
        break;
        
      case '--concurrency':
      case '-c':
        if (i + 1 < args.length) {
          options.concurrency = parseInt(args[i + 1], 10);
          i++;
        }
        break;
    }
  }
  
  return options;
}

/**
 * Выводит справку
 */
export function showHelp(): void {
  console.log(`
🚀 Яндекс.Диск Деплой

Использование:
  npm run deploy [опции]

Опции:
  -h, --help           Показать эту справку
  -v, --version        Показать версию
  --dry-run, --dry     Тестовый запуск без загрузки
  --verbose            Подробный вывод
  -t, --target <path>  Папка на Яндекс.Диске (по умолчанию: /vskuzmin28-site-app/)
  -c, --concurrency <n> Количество параллельных загрузок (по умолчанию: 100)

Примеры:
  npm run deploy
  npm run deploy -- --target /my-site/ --concurrency 50
  npm run deploy -- --dry-run --verbose
`);
}

/**
 * Выводит информацию о версии
 */
export function showVersion(): void {
  const packageJson = require('../../package.json');
  console.log(`Версия деплоя: ${packageJson.version || '1.0.0'}`);
}