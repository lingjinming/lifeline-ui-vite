<template>
  <div class="l-tabs-box">
    <div
      v-for="(item, i) in tabs"
      :key="i"
      :class="[
        'l-tabs-box-item',
        {
          act: activeNameNew == item.label,
        },
      ]"
      @click="clickTab(item)"
    >
      <img class="tabImg" v-if="item.img" :src="item.img" />
      <div class="">
        <p>
          {{ item.label }}
        </p>
        <p v-if="item.subTit">
          {{ item.subTit }}
        </p>
      </div>
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
          img: "",
          subTit: "",
        },
        {
          label: "标签2",
          val: 2,
          img: "",
          subTit: "",
        },
      ],
      type: Array,
    },
    activeName: {
      default: "",
      type: String,
    },
  },
  setup(props, ctx) {
    let activeNameNew = props.activeName
      ? ref(props.activeName)
      : ref(props.tabs[0]["label"]);

    let clickTab = (item) => {
      activeNameNew.value = item.label;
      ctx.emit("tab-click", item);
    };

    return {
      activeNameNew,
      clickTab,
    };
  },
});
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.l-tabs-box {
  display: flex;
}
.l-tabs-box-item {
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 0 20px;
  align-items: center;
}
.act {
  border-bottom: 1px solid red;
}
.tabImg {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
