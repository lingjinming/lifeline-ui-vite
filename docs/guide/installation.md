# 安装

## 环境支持

由于 Vue 3 不再支持 IE11，lifeline-ui 也不再支持 IE11 浏览器。

## 版本

目前还在开发迭代中。

## 选择一个你喜欢的包管理器

建议您使用包管理器 (pnpm/npm/yarn) 安装 lifeline-ui, 然后您就可以使用打包工具，例如 Vite 和 webpack进行功能开发。

:::code-group
```js [pnpm]
$ pnpm i lifeline-ui
```
```js [npm]
$ npm i lifeline-ui --save
```
```js [yarn]
$ yarn add lifeline-ui
```
:::
:::danger 由于组件库使用了iconfont，需要单独引入字体库线上地址方可使用图标，或者引入本地文件
```html
<link rel="stylesheet" href="//at.alicdn.com/t/c/font_3187951_bxx1dr0r34w.css">
<link rel="stylesheet" href="lifeline-ui/public/icon/iconfont.css">
```
:::

### 项目中引入
```js
import LifelineUI from 'lifeline-ui'
app.use(LifelineUI)

```

## 浏览器直接引入

```js
<script src="lifeline-ui/dist/index.es.js"></script>
```

