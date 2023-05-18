## LTabs 用法

:::demo

```vue
<template>
  <l-button style="margin-bottom:20px" name="切换tab间隔" @click="toggleGap" />
  <l-tabs
    activeName="netsjs2"
    :tabs="tabs"
    :gap="gap"
    @tab-click="handleClick"
  ></l-tabs>
</template>
<script>
export default {
  data() {
    return {
      gap: 0,
      tabs: [
        {
          label: "netsjs",
          params: {
            key1: "val1",
          },
        },
        {
          label: "netsjs2",
          subTit: "netsjs",
          params: {
            key2: "val2",
          },
        },
        {
          label: "netsjs3",
          subTit: "netsjs",
          img: "https://www.nestjs.com.cn/img/logo.png",
          params: {
            key1: "val1",
            key2: "val2",
          },
        },
      ],
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
    toggleGap() {
      this.gap == 20 ? (this.gap = 0) : (this.gap = 20);
    },
  },
};
</script>
```

:::

## Tabs 属性

| 属性名     |     描述     |    类型     | 可选参数 |      默认值      |
| ---------- | :----------: | :---------: | :------: | :--------------: |
| activeName |  选中项名称  |   String    |    --    | tabs[0]['label'] |
| tabs       |   tab数据   | [TabsItems] |    --    |        []        |
| gap        | tab间隔 |   Number    |    --    |        0         |

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
