本节将介绍如何在项目中使用 lifeline-ui

## LTabs 用法

:::demo 使用 `color` 属性来定义 Button 的文字颜色。

```vue
<template>
  <l-tabs :tabs="tabs" @tab-click="handleClick"></l-tabs>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          label: "标签3",
        },
        {
          label: "标签4",
        },
      ],
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
  },
};
</script>
```

:::
