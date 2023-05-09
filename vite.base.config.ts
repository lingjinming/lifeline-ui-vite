import * as path from 'path'
import { defineConfig } from 'vite'
import { isVue2 } from 'vue-demi'
import vueJsx from "@vitejs/plugin-vue-jsx";
import requireTransform from 'vite-plugin-require-transform';

import { resolve } from 'path';

const outputName = 'index'
export const defaultPlugins = [
  vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  }),
  requireTransform({
    fileRegex:/.ts$|.tsx$|.vue$/
  })
]
// https://vitejs.dev/config/
export const baseBuildConfig = defineConfig({
  server:{
    hmr: { overlay: false },
  },
  build: {
    outDir: path.resolve(__dirname, `./dist/${isVue2 ? 'v2' : 'v3'}`),
    emptyOutDir: false,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: false, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'index',
      fileName: format => `${outputName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@vue/composition-api/dist/vue-composition-api.mjs'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'vue': 'Vue',
          '@vue/composition-api/dist/vue-composition-api.mjs':
            'VueCompositionAPI',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi', 'vue', 'vue2'],
  },
})
