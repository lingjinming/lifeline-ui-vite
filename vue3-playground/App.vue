<script lang="ts" setup>
import { isVue2, isVue3, reactive, ref } from 'vue-demi'

const versionStr = isVue2 ? 'Vue2' : 'Vue3'
const Vue2Version = ref(versionStr)
const tabs = reactive([
  {label:'122'},
  {label:'label2'},
])
let activeName = ref('label2')
console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`)
const click = (() => {
  console.log(activeName)
  activeName.value == 'label2' ? activeName.value = '122' :activeName.value = 'label2'
})
</script>

<template>
  <div>
    <span @click="click">{{ Vue2Version }}</span>
    <l-tabs v-model="activeName"  :tabs="tabs"></l-tabs>
    <l-button ></l-button>
    
  </div>
</template>

<style>
body > div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
