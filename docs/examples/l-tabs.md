## LTabs 用法

可显示副标题和图片的 tabs,配置 data-theme 更换皮肤
:::demo

```vue
<template>
  <l-button style="margin-bottom:20px" name="切换tab选中" @click="toggleGap" />
  <l-tabs
    data-theme="light"
    v-model="activeName"
    :tabs="tabs"
    :gap="0"
    @tab-click="handleClick"
  ></l-tabs>
  <!-- vue2中使用 :modelValue.sync -->
  <l-tabs
    data-theme="dark"
    :modelValue.sync="activeName"
    :tabs="tabs"
    :gap="20"
    :clickable="false"
    @tab-click="handleClick"
  ></l-tabs>

    <l-tabs
    data-theme="dark"
    :modelValue.sync="activeName"
    :tabs="tabs"
    :gap="20"
    wrap
  ></l-tabs>
</template>
<script>
export default {
  data() {
    return {
      gap: 0,
      activeName: "",
      tabs: [
        {
          label: "nestjs",
          params: {
            key1: "val1",
          },
        },
        {
          label: 0,
          subTit: 0,
          params: {
            key2: "val2",
          },
        },
        {
          label: "nestjs3",
          subTit: "nestjs",
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
      this.activeName = "nestjs3";
    },
  },
};
</script>
<style>
.l-detail-box {
  margin-bottom: 20px;
}
</style>
```

:::

## Tabs 属性

| 属性名     |                  描述                   |    类型     |  可选参数   |      默认值      |
| ---------- | :-------------------------------------: | :---------: | :---------: | :--------------: |
| modelValue | 选中项名称，vue2 中配合.sync 修饰符使用 |   String    |     --      | tabs[0]['label'] |
| v-model    |         vue3 中使用，选中项名称         |   String    |     --      | tabs[0]['label'] |
| tabs       |                tab 数据                 | [TabsItems] |     --      |        []        |
| gap        |                tab 间隔                 |   Number    |     --      |        0         |
| data-theme |                组件皮肤                 |   String    | light,dark |      light       |
| clickable  |     是否可点击，不可点击时无下划线      |   Boolean   | true,false  |       true       |
| wrap  |     是否换行      |   Boolean   | true,false  |       false       |

## TabsItems 属性

| 属性名 |   描述   |        类型         | 可选参数 | 默认值 |
| ------ | :------: | :-----------------: | :------: | :----: |
| label  |   名称   |       String        |    --    |   --   |
| subTit |  副标题  |       String        |    --    |   --   |
| img    | 图片路径 | 绝对路径或者 base64 |    --    |   --   |
| params | 额外参数 |       Object        |    --    |   --   |

## 事件

| 事件名    |     描述     |   回调参数    |
| --------- | :----------: | :-----------: |
| tab-click | tab 点击事件 | 当前 tab 实例 |
