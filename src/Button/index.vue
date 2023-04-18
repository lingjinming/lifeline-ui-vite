<template>
  <button
  :style="{
    color:color
  }" 
  @click="handleClick"
  >LButton</button>
</template>
<script lang="ts">
import { defineComponent, PropType, h, isVue2 } from "vue-demi";

export default defineComponent({
  name: "LButton",
  props:{
    color:{
        default:'white',
        type:String
    }
  },
  setup() {
    let handleClick = () => {
      console.log("handleClick");
    };
    return {
      handleClick,
    };
  },
});
</script>

<style scoped>
button{
    border-radius: 5px;
    padding: 2px 10px;
    background: rgb(0, 110, 255);
    margin-right: 10px;
}
</style>
