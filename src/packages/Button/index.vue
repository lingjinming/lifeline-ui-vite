<script lang="ts">
import { defineComponent, PropType, h, isVue2, ref } from "vue-demi";

export default defineComponent({
  name: "LButton",
  props: {
    color: {
      default: "white",
      type: String,
    },
  },
  emits: ["clickBtn"],
  setup(props, ctx) {
    let count = ref(0)
    let clickBtn = () => count.value++

    return {
      count,
      clickBtn
    };
  },
});
</script>
<template>
  <button
    :style="{
      color,
    }"
    @click="clickBtn"
  >
{{ count }}
    <slot />
  </button>
</template>
<style scoped>
button {
  border-radius: 5px;
  padding: 2px 10px;
  background: rgb(0, 110, 255);
  margin-right: 10px;
}
</style>
