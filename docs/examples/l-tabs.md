## LTabs 用法 
:::demo
```vue
  <template>
      <l-tabs style="width:250px" @tab-click='handleClick'></l-tabs>
  </template>
  <script>
  export default{
    methods:{
      handleClick(tab){
        console.log(tab)
      }
    }
  };
  </script>

```
:::

## Events

| name          |   des           | callback  |
| ------------- |:-------------: | :-----:|
| tab-click     | tab点击事件 | 当前tab实例 |




