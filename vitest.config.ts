import { createRequire } from 'module'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { realpathSync } from 'fs'
import { dirname, resolve } from 'path'

const require = createRequire(import.meta.url)
// 以 @vue/test-utils 实际解析到的 vue 实例为基准做统一 alias，
// 避免组件代码与 test-utils 使用不同 Vue 实例（pnpm 依赖隔离导致的多版本冲突）
const testUtilsDir = dirname(require.resolve('@vue/test-utils/package.json'))
const vueDir = dirname(realpathSync(require.resolve('vue/package.json', { paths: [testUtilsDir] })))
const vueSiblings = resolve(vueDir, '..')

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      { find: 'vue', replacement: vueDir },
      { find: /^@vue\/(?!test-utils)/, replacement: `${vueSiblings}/@vue/` },
      { find: 'vue-demi', replacement: resolve(__dirname, 'vitest-utils/vue-demi-shim.mjs') },
    ],
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
