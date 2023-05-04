## LTabs 用法 
使用 `color` 属性来定义 Button 的文字颜色。
:::demo
```vue
  <template>
      <l-tabs :tabs='tabs'></l-tabs>
  </template>
  <script>
  export default{
    data() {
      return{
        tabs:[
          {label:'1'},
          {label:'2'},
        ]
      }
    },
  };
  </script>

```
:::




