

<template>
  <div>
    <l-button @click="change" name="切换主题"></l-button>
    <span>{{ versionStr }}</span>
    <l-detail tit="浅浅" data-theme="dark" @click="click" >
    <div>1111</div>
    </l-detail>
  </div>
</template>
<script>
import { isVue2, isVue3, reactive, ref } from 'vue-demi'

export default{
  data(){
    return{
      versionStr: isVue2 ? 'Vue2' : 'Vue3',
      activeName:'2',
      tabs:[{label:'1'},{label:'2'},{label:'3'}],
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
    }
  },
  methods:{
    click(item){
      console.log(item)
    },
    change(){
      let theme = document.querySelector('html').getAttribute('data-theme')
      
      theme == 'dark' ? theme = 'light' : theme = 'dark' 
      document.querySelector('html').setAttribute('data-theme',theme)
     }
  }
}
</script>
<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  background: #b9b9b9;
}
</style>
