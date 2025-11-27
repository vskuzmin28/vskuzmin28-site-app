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
          src: 'src/assets/docs/**/*',
          dest: 'assets/docs'
        },
        {
          src: 'src/assets/images/**/*',
          dest: 'assets/images'
        },
        {
          src: 'src/assets/fonts/**/*',
          dest: 'assets/fonts'
        }
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
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Добавляем проверку на undefined
          if (!assetInfo.name) {
            return 'assets/[name]-[hash][extname]'
          }
          
          const extType = assetInfo.name.split('.')[1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
