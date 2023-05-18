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

## Tabs 属性

| 属性名     |    描述    |    类型     | 可选参数 |      默认值      |
| ---------- | :--------: | :---------: | :------: | :--------------: |
| activeName | 选中项名称 |   String    |    --    | tabs[0]['label'] |
| tabs       |  tab 数据  | [TabsItems] |    --    |        []        |

## TabsItems Attributes

| 属性名 |   描述   |  类型  | 可选参数 | 默认值 |
| ------ | :------: | :----: | :------: | :----: |
| label  |   名称   | String |    --    |   --   |
| subTit |  副标题  | String |    --    |   --   |
| img    | 图片路径 | String |    --    |   --   |
| params | 额外参数 | Object |    --    |   --   |

## Tabs Events

| 事件名    |     描述     |   回调参数    |
| --------- | :----------: | :-----------: |
| tab-click | tab 点击事件 | 当前 tab 实例 |
