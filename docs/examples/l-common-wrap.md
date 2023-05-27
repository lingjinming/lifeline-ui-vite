## LCommonWrap 用法

:::demo

```vue
<template>
  <l-common-wrap
  tit='标题1'
  >
  <div>内容</div>
  </l-common-wrap>
</template>
<script>
export default {
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
  },
};
</script>
```

:::

## 属性

| 属性名     |    描述    |    类型     | 可选参数 |      默认值      |
| ---------- | :--------: | :---------: | :------: | :--------------: |
| tit | 标题名称 |   String    |    --    | -- |


