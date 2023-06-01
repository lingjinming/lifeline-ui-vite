<template>
  <div class="l-wrap" v-if="showWrap">
    <section class="l-wrap-tit" :style="titStyle">
      <H4>
        <span> {{ tit }} </span>
        <slot name="btn"></slot>
        <img v-if="showBtn && !slots.btn" src="./icon_close.png" @click="closeWrap">
      </h4>
    </section>
    <section class="l-wrap-con">
      <slot></slot>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, PropType, h, isVue2, ref, computed, useSlots } from "vue-demi";
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
  showBtn: {
    type: Boolean,
    default: true,
  },
});
let showWrap = ref(true)

const emit = defineEmits(["close"]);
const slots= useSlots()

console.log(slots)

const titStyle = computed(() => {
  return {
    backgroundImage: `url(${props.titBg})`,
  };
});

const closeWrap = () => { 
  showWrap.value = false
  emit('close')
 }
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
      padding:0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        cursor: pointer;
      }
    }
  }
  &-con {
    padding: 20px;
    height: calc(100% - 45px);
    background: url('./bg_bottom.png') no-repeat center bottom ;
  }

}
</style>
