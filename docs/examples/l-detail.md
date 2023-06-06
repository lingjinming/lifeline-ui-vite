## LDetail 用法

:::demo

```vue
<template>
  <l-detail data-theme='light' :details="details" @click="click"></l-detail>
  <l-detail data-theme='dark' :details="details" @click="click"></l-detail>
</template>
<script>
export default {
  data() {
    return {
      tit: "详情",
      details: [
        {
          label: "label1",
          val: "val1val1val1val1val1val1val1val1val1val1val1val1val1",
          clickable: true,
        },
        {
          label: "label2",
          val: "val2",
        },
        {
          label: "label3",
          val: "val3",
          clickable: true,
        },
        {
          label: "label4",
          val: "val4",
        },
      ],
    };
  },
  methods: {
    click(item) {
      console.log(item);
    },
  },
};
</script>
```

:::

## 属性

| 属性名  |    描述     |     类型     | 可选参数 |  默认值  |
| ------- | :---------: | :----------: | :------: | :------: |
| tit     |    标题     |    String    |    --    | 详情信息 |
| details | detail 数据 | [DetailItem] |    --    |    []    |
| data-theme | 组件皮肤 | String |    light、dark    |    light    |

## DetailItem 属性

| 属性名    |    描述    |  类型   | 可选参数 | 默认值 |
| --------- | :--------: | :-----: | :------: | :----: |
| label     |    名称    | String  |    --    |   --   |
| val       |     值     | String  |    --    |   --   |
| clickable | 是否可点击 | Boolean |    --    | false  |

## 事件

| 事件名 |         描述         |  回调参数  |
| ------ | :------------------: | :--------: |
| click  | 详情元素被点击的回调 | 当前点中项 |
