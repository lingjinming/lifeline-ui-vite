

<template>
  <div>
    <span @click="click">{{ versionStr }}</span>
    <l-tabs :modelValue.sync="activeName" :tabs='tabs' :gap='30' @tab-click='tabClick'></l-tabs>
  </div>
</template>
<script>
import { isVue2, isVue3, reactive, ref } from 'vue-demi'

export default{
  data(){
    return{
      versionStr: isVue2 ? 'Vue2' : 'Vue3',
      activeName:'1',
      tabs:[{label:'1'},{label:'2'},{label:'3'}]
    }
  },
  methods:{
    click(){
      console.log(this.activeName)
    },
    tabClick(){
      console.log(this.activeName)

    }
  }
}
</script>
<style>
body > div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
