# lifeline-ui-vite
兼容vue2和vue3的组件库
# 文档地址
https://lifeline-ui-vite.pages.dev/

## 安装

```bash
npm install lifeline-ui
# 或
yarn add lifeline-ui
# 或
pnpm add lifeline-ui
```

### pnpm 用户注意

组件库通过 `postinstall` 脚本根据你项目中的 Vue 版本（2.7 / 3）自动切换对应的构建产物。pnpm v10+ 默认禁止运行依赖包的构建脚本，会导致安装后无法使用。

请在项目根目录 `package.json` 中添加：

```json
{
  "pnpm": {
    "onlyBuiltDependencies": ["lifeline-ui", "vue-demi"]
  }
}
```

> 配置后需删除 `node_modules` 和 `pnpm-lock.yaml` 重新安装才能生效。

## 使用

### 引入样式

```js
import 'lifeline-ui/dist/style.css'
```

### 全量注册

```js
import LifelineUI from 'lifeline-ui'

app.use(LifelineUI) // Vue 3: app.use；Vue 2: Vue.use
```

### 按需引入

```js
import { LButton, LTabs, LWrap, LDetail } from 'lifeline-ui'
```
