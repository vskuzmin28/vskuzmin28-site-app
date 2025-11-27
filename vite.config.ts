import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/docs/**/*',  // Копируем все файлы из docs
          dest: 'assets/docs'
        },
        {
          src: 'src/assets/images/**/*', // Копируем все изображения
          dest: 'assets/images'
        },
        {
          src: 'src/assets/fonts/**/*',  // Копируем шрифты
          dest: 'assets/fonts'
        }
        // {
        //   src: 'src/assets/icons/**/*',  // Копируем иконки
        //   dest: 'assets/icons'
        // }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/assets/styles/main.scss';
          @import './src/assets/styles/base.scss';
          @import './src/assets/styles/fonts.scss';
          @import './src/assets/styles/helpers/mixins.scss';
          @import './src/assets/styles/helpers/vars.scss';
        `
      }
    }
  },
  build: {
    assetsDir: 'assets',  // Указываем папку для assets
    rollupOptions: {
      output: {
        // Правильное именование файлов
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images'
          }
          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        }
      }
    }
  }
})

