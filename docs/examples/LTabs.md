## LTabs 用法 
:::demo
```vue
  <template>
      <l-tabs @tab-click='handleClick'></l-tabs>
  </template>
  <script>
  export default{
    methods:{
      handleClick(tab){
        alert(JSON.stringify(tab))
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




