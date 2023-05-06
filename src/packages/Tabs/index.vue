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
      <img class="l-tabs-box-img" v-if="item.img" :src="item.img" />
      <div class="l-tabs-box-content">
        <p class="">
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
import { defineComponent, PropType, h, isVue2, ref, onMounted } from "vue-demi";
export default defineComponent({
  name: "LTabs",
  props: {
    tabs: {
      default: [
        {
          label: "netsjs",
          val: 1,
          img:'https://www.nestjs.com.cn/img/logo.png',
          subTit: "netsjs",
        },
        {
          label: "netsjs2",
          val: 2,
          img:'https://www.nestjs.com.cn/img/logo.png',
          subTit: "netsjs",
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

<style lang="scss" scoped>
.l-tabs-box {
  display: flex;
  &-item {
    position: relative;
    display: flex;
    cursor: pointer;
    padding: 10px 20px;
    align-items: center;
    color: var(--baseTxtColor);

    &.act::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--baseBgColor);
    }


  }
  &-img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }


}



</style>
