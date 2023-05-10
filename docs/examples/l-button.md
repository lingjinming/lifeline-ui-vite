## LButton 用法

:::demo

```vue
<template>
  <l-button>插槽内容</l-button>
  <l-button lIcon="wendu" />
  <l-button isCircle color="#fff" name="按钮" />
  <l-button color="#fff" bgColor="red" lIcon="jia" name="新增" />
  <l-button color="#fff" rIcon="shezhi" name="设置" />
  <l-button
    color="#fff"
    lIcon="jia"
    rIcon="shezhi"
    name="导出"
    @click="handleClick"
  ></l-button>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log("点击按钮");
    },
  },
};
</script>
<style>
.l-button {
  margin-right: 10px;
}
</style>
```

:::

## Button Attributes

| name    |      des       |  type  | optional | default |
| ------- | :------------: | :----: | :------: | :-----: |
| name    |    按钮名称    | String |    --    |   --    |
| bgcolor |  按钮背景颜色  | String |    --    | #2395ff |
| color   | 文字和图标颜色 | String |    --    |  #fff   |
| lIcon   |   左边 icon    | String |    --    | shezhi  |
| rIcon   |   右边 icon    | String |    --    | shuaxin |
