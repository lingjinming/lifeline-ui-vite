<template>
  <button
    class="l-button"
    :class="{'l-button-circle':isCircle}"
    :style="{
      backgroundColor:bgColor,
      color,
      padding
    }"
  >

    <i v-if="lIcon" class="l-iconfont" :class="'l-icon-'+lIcon"></i>
    <slot></slot>
    <span  class="l-button-span" v-if="name">{{name}}</span>
    <i v-if="rIcon" class="l-iconfont" :class="'l-icon-'+rIcon"></i>
  </button>
</template>
<script lang="ts" >
import { defineComponent, PropType, h, isVue2, ref, computed } from "vue-demi";

export default defineComponent({
  name: "LButton",
  props: {
    color: {
      default: "white",
      type: String,
    },
    bgColor: {
      default: "#2395ff",
      type: String,
    },
    lIcon: {
      default: "",
      type: String,
    },
    rIcon: {
      default: "",
      type: String,
    },
    isCircle: {
      default: false,
      type: Boolean
    },
    name: {
      default: '',
      type: String
    },
  },
  setup(props, ctx) {
    const padding = computed(() => {
      if(!props.lIcon && !props.rIcon && !props.name){
        return '0 15px'
      }else if(!props.lIcon && !props.rIcon){
        return '0'
      }else{
        return props.name || props.lIcon || props.rIcon ? "0 15px" : "0"
      }
    })
    return {
      padding
    }
  }
});
</script>

<style lang="scss" scoped>
.l-button {
  min-width: 45px;
  height: 45px;
  line-height: 45px;
  padding: 0 ;
  background: var(--baseBtnBgColor);
  &-circle{
    border-radius: 50%;
  }
  &-span{
    margin: 0 5px;
  }
}
</style>
