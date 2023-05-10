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
        <h3>
          {{ item.label }}
        </h3>
        <p v-if="item.subTit">
          {{ item.subTit }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, h, isVue2, ref, onMounted } from "vue-demi";
import { ILTabs } from "../../../types/l-tabs";


export default defineComponent({
  name: "LTabs",
  props: {
    tabs: {
      default: [
        {label:'default label'}
      ],
      type: Object as PropType<ILTabs>
    },
    activeName: {
      default: "",
      type: String,
    }
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
  position: relative;
  background: #fff;
  border-radius: var(--baseBorderRadius);
  display: flex;
  justify-content: space-around;
  gap: 15px;
  padding: 0 20px;
  margin-bottom: 20px;
  &-item {
    position: relative;
    flex: 1;
    display: flex;
    cursor: pointer;
    min-height: 80px;
    align-items: center;
    color: var(--baseTxtColor);
    padding-left: 20px;
    &:hover::after,
    &.act::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--baseColor);
      animation: grow .3s 1;
      @keyframes grow {
        0%{
          width: 0%;
        }
      }
    }

  }
  &-content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3{
      margin: 0;
      padding: 0;
      font-size: 20px;
      line-height: 25px;
    }
    p{
      margin: 0;
      padding: 0;
      font-size: 16px;
      line-height: 20px;
    }
  }
  &-img {
    width: 45px;
    height: 45px;
    margin-right: 15px;
  }

}
</style>
