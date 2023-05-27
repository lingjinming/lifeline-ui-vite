<script lang="ts" setup>
import { isVue2, isVue3, onMounted, reactive, ref } from 'vue-demi'

const versionStr = isVue2 ? 'Vue2' : 'Vue3'
const Vue2Version = ref(versionStr)
const tabs = [
  {label:'1'},
  {label:'2'},
]
console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`)

let activeName = ref('1')
const click = (item => {
  console.log(activeName)
  activeName.value = '2'
  console.log(activeName)

})
</script>

<template>
  <div>
    <span @click="click">{{ Vue2Version }}</span>
    <l-tabs :activeName.sync="activeName" :tabs='tabs' :gap='30'></l-tabs>
  </div>
</template>

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
