import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { createVuePlugin } from 'vite-plugin-vue2'

// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    // createVuePlugin(),
    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加UnoCSS插件
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // }),
  ],
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "LifeLineUI",
      fileName: "lifeline-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
});
