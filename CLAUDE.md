# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**lifeline-ui** 是一个兼容 Vue 2.7 和 Vue 3 的 UI 组件库，通过 vue-demi 实现双版本支持。使用 Vite 3 构建，pnpm workspace 管理多 playground。

## Development Commands

```bash
# 开发 - Vue 3 (端口 3000)
npm run dev:3

# 开发 - Vue 2.7 (端口 2700)
npm run dev:2.7

# 构建全部
npm run build

# Lint 修复
npm run lint:fix

# 测试
npm run test        # vitest watch 模式
npm run test:run    # 单次运行全部测试

# 文档开发/构建
npm run docs:dev
npm run docs:build

# 发布
npm run release
```

## Architecture

### Dual Vue Version Strategy

项目通过 `vue-demi-switch` 在 Vue 2.7 和 Vue 3 之间切换。所有组件代码使用 `vue-demi` API 编写，构建产物分别输出到 `dist/v2/` 和 `dist/v3/`。

- `vite.base.config.ts` — 共享构建配置，根据 `isVue2` 动态设置输出目录
- `scripts/postinstall.js` — 安装后自动处理 Vue 版本切换
- `scripts/utils.js` — 版本切换工具函数

### Component Structure

组件位于 `src/packages/` 下，每个组件一个目录，包含 `index.vue` 和 `index.ts`。当前组件：

- **LButton** — 按钮组件（支持图标、圆形样式）
- **LTabs** — 标签页组件（支持图片、子标题、响应式布局）
- **LWrap** — 容器组件（支持关闭图标）
- **LDetail** — 详情展示组件（网格布局，可配置列数）

`src/index.ts` 为入口，同时支持单个导入和全量注册（Vue plugin install）。

### Workspace Layout

pnpm workspace 包含三个 playground：
- `vue3-playground/` — Vue 3 演示
- `vue2.7-playground/` — Vue 2.7 演示

### Styling

- SCSS，使用 CSS 变量实现主题系统
- 主题定义在 `src/assets/theme/index.scss`，包含 `useTheme()`、`getVar()`、`clear()` 等 mixin
- 通过 `[data-theme]` 属性支持明暗主题切换
- 图标使用阿里巴巴 Iconfont

### Build Output

构建产生 ES、CJS、UMD 三种格式，`vue` 和 `@vue/composition-api` 作为 external 处理。

### Testing

- 使用 Vitest + @vue/test-utils + jsdom
- 测试文件位于各组件的 `__tests__/` 目录下
- `vitest.config.ts` 配置了 vue-demi shim 以解决 pnpm 多版本 Vue 冲突（`vitest-utils/vue-demi-shim.mjs`）

## Key Conventions

- 组件注册名使用 `L` 前缀（LButton、LTabs 等）
- pnpm 作为包管理器
- .npmrc 配置了淘宝镜像源，发布时需切换回 npm 源（见 `publish.sh`）
