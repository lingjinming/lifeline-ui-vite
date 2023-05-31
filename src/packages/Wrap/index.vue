<template>
  <div class="l-wrap" v-if="showWrap">
    <section class="l-wrap-tit" :style="titStyle">
      <h4>
        <span> {{ tit }} </span>
        <i v-if="showCloseBtn" class="l-iconfont l-icon-guanbi" @click="closeWrap">11</i>
      </h4>
    </section>
    <section class="l-wrap-con">
      <slot></slot>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, PropType, h, isVue2, ref, computed } from "vue-demi";
export interface ILTabs {
  label: String;
  img?: String;
  subTit?: String;
  params?: any;
}
const props = defineProps({
  tit: {
    type: String,
    default: "默认标题",
  },
  titBg: {
    type: String,
    default: "https://www.nestjs.com.cn/img/logo.png",
  },
  showCloseBtn: {
    type: Boolean,
    default: true,
  },
});
let showWrap = ref(true)
const closeWrap = () => { showWrap.value = false }
const titStyle = computed(() => {
  return {
    backgroundImage: `url(${props.titBg})`,
  };
});

console.log(titStyle);
</script>

<style lang="scss" scoped>
.l-wrap {
  position: relative;
  background: rgba(3, 16, 33, 0.85);
  border-radius: var(--baseBorderRadius);
  border: 1px solid var(--baseColor);
  color: #fff;

  &-tit {
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    h4 {
      margin: 0;
      height: 45px;
      padding:0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .l-icon-guanbi{
        cursor: pointer;
      }
    }
  }
  &-con {
    padding: 20px;
    height: calc(100% - 45px);
  }

}
</style>
