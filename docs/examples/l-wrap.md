## LWrap 用法

:::demo

```vue
<template>
  <l-wrap
  tit='面板标题'
  :titBg='titBg'
  >
  <div>内容插槽</div>
  <div>内容插槽</div>
  <div>内容插槽</div>
  <div>内容插槽</div>
  <div>内容插槽</div>
  </l-wrap>
</template>
<script>
export default {
  data(){
    return{
      titBg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8de16a08-9d84-46d7-ad0d-19ffec0aff13%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688116946&t=895259fde79b271b8b4207b10d79a114'
    }
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

## 属性

| 属性名     |    描述    |    类型     | 可选参数 |      默认值      |
| ---------- | :--------: | :---------: | :------: | :--------------: |
| tit | 标题名称 |   String    |    --    | -- |
| titBg | 标题背景图 |   绝对路径或者base64    |    --    | -- |


