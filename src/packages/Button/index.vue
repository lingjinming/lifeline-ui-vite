<template>
  <button
    :style="{
      color,
    }"
    @click="clickBtn"
  >
{{ count }}
    <i v-if="icon" class="l-iconfont" :class="'l-icon-'+icon"></i>
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, h, isVue2, ref } from "vue-demi";

export default defineComponent({
  name: "LButton",
  props: {
    color: {
      default: "white",
      type: String,
    },
    icon: {
      default: "shuijiance",
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

<style scoped>
button {
  background: var(--baseBgColor);
  margin-right: 10px;
}
</style>
