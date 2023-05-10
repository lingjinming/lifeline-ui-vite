## LTabs 用法

:::demo

```vue
<template>
  <l-tabs style="height:90px" activeName="netsjs2" :tabs="tabs" @tab-click="handleClick"></l-tabs>
</template>
<script>
export default {
  data() {
    return {
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
  },
};
</script>
```

:::

## Tabs Attributes

| name       |    des     |    type     | optional |     default      |
| ---------- | :--------: | :---------: | :------: | :--------------: |
| activeName | 选中项名称 |   String    |    --    | tabs[0]['label'] |
| tabs       |  tab 数据  | [TabsItems] |    --    |        []        |

## TabsItems Attributes

| name   |   des    |  type  | optional | default |
| ------ | :------: | :----: | :------: | :-----: |
| label  |   名称   | String |    --    |   --    |
| subTit |  副标题  | String |    --    |   --    |
| img    | 图片路径 | String |    --    |   --    |
| params | 额外参数 | Object |    --    |   --    |

## Tabs Events

| name      |     des      |   callback    |
| --------- | :----------: | :-----------: |
| tab-click | tab 点击事件 | 当前 tab 实例 |
