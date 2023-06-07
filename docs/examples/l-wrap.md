## LWrap 用法
  该组件常用于大屏和三维系统;可使用具名slot添加自定义头部右侧内容，默认是关闭按钮。
:::demo

```vue
<template>
  <l-wrap showBtn tit="面板标题1" :titBg="titBg" @close="close">
    <div>默认内容插槽</div>
    <div>默认内容插槽</div>
  </l-wrap>

  <l-wrap :showBtn="false" tit="面板标题2" :titBg="titBg" @close="close">
    <!-- 插槽 自定义头部右侧插槽内容  -->
    <template #btn>
        <l-button color="#fff" bgColor="transparent" lIcon="jia" name="新增" />
    </template>
    <div>默认内容插槽</div>
    <div>默认内容插槽</div>
  </l-wrap>
</template>
<script>
export default {
  data() {
    return {
      titBg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8de16a08-9d84-46d7-ad0d-19ffec0aff13%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688116946&t=895259fde79b271b8b4207b10d79a114",
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
    close() {
      console.log("容器关闭");
    },
  },
};
</script>
<style>
.l-wrap {
  margin-bottom: 20px;
}
</style>
```

:::

## 属性

| 属性名  |         描述         |        类型         | 可选参数 | 默认值 |
| ------- | :------------------: | :-----------------: | :------: | :----: |
| tit     |       标题       |       String        |    --    |   --   |
| titBg   |      标题背景图      | 绝对路径或者 base64 |    --    |   --   |
| showBtn | 是否显示容器关闭按钮 |       boolean       |    --    |  true  |
| data-theme | 组件皮肤 | String |    light、dark    |    dark    |
## slot

| 属性名 |                   描述                   |
| ------ | :--------------------------------------: |
| btn    | 容器头部右侧内容，不传时为默认的关闭按钮 |

## 事件

| 事件名 |      描述      | 回调参数 |
| ------ | :------------: | :------: |
| close  | 容器关闭的回调 |    -     |
