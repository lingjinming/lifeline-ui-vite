<template>
  <div class="l-tabs-box">
    <div
      v-for="(item, i) in tabs"
      :key="i"
      :class="[
        'tabItem',
        {
          'act': activeNameNew == item.label
        }
        
      ]"
      @click="clickTab(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>
<script lang="ts">
import { emit } from "process";
import { defineComponent, PropType, h, isVue2, ref, onMounted } from "vue-demi";

export default defineComponent({
  name: "LTabs",
  props: {
    tabs: {
      default: [
        {
          label: "标签1",
          val: 1,
          img:''
        },
        {
          label: "标签2",
          val: 2,
          img:''
        },
      ],
      type: Array,
    },
    activeName:{
      default:'',
      type:String
    }
  },
  setup(props, ctx) {
    let activeNameNew = props.activeName ? ref(props.activeName) : ref(props.tabs[0]['label'])

    let clickTab = (item) => {
      activeNameNew.value = item.label;
      ctx.emit('tab-click',item)
    };

    return {
      activeNameNew,
      clickTab,
    };
  },
});
</script>

<style scoped>
.l-tabs-box{
  display: flex;
}
.tabItem{
  cursor: pointer;
}
.act{
  border-bottom: 1px solid red;
}
</style>
