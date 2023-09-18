<template>
  <section class="l-wrap" v-if="showWrap" :data-theme="dataTheme">
    <h4 class="l-wrap-tit" :style="titStyle">
      <span> {{ tit }} </span>
      <slot name="btn"></slot>
      <span class="img" v-if="showBtn && !slots.btn" @click="closeWrap"></span>
    </h4>
    <section class="l-wrap-con" :style="conStyle">
      <slot></slot>
    </section>
  </section>
</template>
<script lang="ts" setup>
import {
  defineComponent,
  PropType,
  h,
  isVue2,
  ref,
  computed,
  useSlots,
} from "vue-demi";
export interface ILTabs {
  label: String;
  img?: String;
  subTit?: String;
  params?: any;
}
const props = defineProps({
  dataTheme: {
    default: "dark",
    type: String,
  },
  tit: {
    type: String,
    default: "默认标题",
  },
  titBg: {
    type: String,
    default: "https://www.nestjs.com.cn/img/logo.png",
  },
  conBg:{
    type: String,
    default: '/img/logo.png'
  },
  showBtn: {
    type: Boolean,
    default: true,
  },
});
let showWrap = ref(true);

const emit = defineEmits(["close"]);
const slots = useSlots();

console.log(slots);

const titStyle = computed(() => {
  return {
    backgroundImage: `url(${props.titBg})`,
  };
});
const conStyle = computed(() => {
  return {
    backgroundImage: `url(${props.titBg})`,
  };
});
const closeWrap = () => {
  showWrap.value = false;
  emit("close");
};
</script>

<style lang="scss" scoped>
@import "../../assets/theme/index.scss";
.l-wrap {
  position: relative;
  width: 100%;
  border-radius: var(--baseBorderRadius);
  &-tit {
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    @include useTheme{
      color: getVar(color);
      background: getVar(bgColor);
    }
    @include useTheme{
      border: getVar(border);
      border-bottom: none;
    }
    margin: 0;
    height: 45px;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img {
      width: 50px;
      height: 100%;
      cursor: pointer;
      background: url("./icon_close.png") no-repeat center;
      &:hover{
        background: url("./icon_close_hover.png") no-repeat center;
      }
    }
  }
  &-con {
    padding:0 20px;
    height: calc(100% - 45px);
    @include useTheme{
      border: getVar(border);
      border-top: none;
    }
    @include useTheme {
      color: getVar(color);
      background-color: getVar(bgColor);
    }
  }
}
</style>
