import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
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
  }
})


