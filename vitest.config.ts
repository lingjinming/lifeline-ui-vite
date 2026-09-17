import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

const vueRoot = resolve(__dirname, 'node_modules/.pnpm/vue@3.2.44/node_modules/vue')

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      { find: 'vue3', replacement: vueRoot },
      { find: 'vue', replacement: vueRoot },
      { find: 'vue-demi', replacement: resolve(__dirname, 'vitest-utils/vue-demi-shim.mjs') },
    ],
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
