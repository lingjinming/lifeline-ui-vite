<template>
  <div class="l-common-wrap">
    <section class="l-common-wrap-tit">
      <h4>{{tit}}</h4>
    </section>
    <section class="l-common-wrap-con">
      <slot></slot>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, PropType, h, isVue2, ref, onMounted } from "vue-demi";
export interface ILTabs {
  label: String;
  img?: String;
  subTit?: String;
  params?: any;
}
defineProps({
  tit:{
    type:String,
    default:'默认标题'
  }
})
</script>

<style lang="scss" scoped>
.l-common-wrap {
  position: relative;
  background: #fff;
  border-radius: var(--baseBorderRadius);
  &-tit{
    position: relative;

    h4{
      height: 45px;
      line-height: 45px;
      padding-left: 20px;
    }
  }
  &-con{
    padding: 20px;
    height: calc(100% - 45px);
  }
}
</style>
