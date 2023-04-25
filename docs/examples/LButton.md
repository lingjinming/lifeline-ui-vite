本节将介绍如何在项目中使用 lifeline-ui

## LButton 用法

:::demo 使用 `color` 属性来定义 Button 的文字颜色。

```vue
<template>
  <l-button />
  <l-button color="red" @click="click">按钮</l-button>
</template>
<script>
export default {
  methods: {
    click(){
      alert("click");
    },
    handleClick() {
      alert("handleClick");
    },
  },
};
</script>
```
:::
