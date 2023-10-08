<template>
  <section class="l-detail-box" :data-theme="dataTheme">
    <h5 v-if="tit" class="l-detail-box-tit">{{ tit }}</h5>
    <div class="l-detail-box-con">
      <ul class="l-detail-box-ul" v-if="details.length" :style="getUlStyle" >
        <li class="l-detail-box-li" v-for="(item, i) in details" :key="i">
          <span class="label">{{ item.label }}:</span>
          <span v-if="item.clickable" class="val clickable" @click="click(item)">
            {{ item.val }}
          </span>
          <span v-else class="val">{{ item.val }}</span>
        </li>
      </ul>
      <slot></slot>
    </div>
  </section>
</template>
<script lang="ts" setup>
import {
  defineComponent,
  PropType,
  h,
  isVue2,
  ref,
  onMounted,
  watch,
  computed,
} from "vue-demi";
interface IDetailItem {
  label: String;
  val: String;
  clickable: Boolean;
}
const props = defineProps({
  dataTheme: {
    default: "light",
    type: String,
  },
  tit: {
    default: "",
    type: String,
  },
  details: {
    default() {
      return [];
    },
    type: Array as () => PropType<IDetailItem[]>,
  },
  cols:{
    default:3,
    type: Number
  }
});
const getUlStyle = computed(() => {
  let val = props.cols
  if(typeof val == 'string'){
    val = 1
  }
  return {
    'grid-template-columns': `repeat(${val},1fr)`
  }
})
const emit = defineEmits(["click"]);
const click = (item) => {
  emit("click", item);
};
</script>

<style lang="scss" scoped>
@import "../../assets/theme/index.scss";
table,
ul,
li,
h5,
p {
  @include clear;
}
.l-detail-box {
  &-tit {
    position: relative;
    height: 55px;
    line-height: 55px;
    font-size: 18px;
    font-weight: 500;
    text-indent: 1em;
    color: var(--baseTxtColor);
    @include useTheme {
      color: getVar(color);
      background: getVar(bgColor);
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      width: 4px;
      background: var(--baseColor);
    }
    &::after {
      position: absolute;
      bottom: 0;
      left: 15px;
      right: 15px;
      content: "";
      border-bottom: 1px solid rgba($color: #bdbdbd, $alpha: 0.2);
    }
  }
  &-con {
    padding: 15px 20px;
    @include useTheme {
      color: getVar(subColor);
      background: getVar(bgColor);
    }
  }
  &-ul {
    display: grid;
    // row-gap: 20px;
    // column-gap: 20px;
    gap: 20px;
  }
  &-li {
    display: flex;
    align-items: center;
    gap: 10px;
    .label {
      white-space: nowrap;
      @include useTheme {
        color: getVar(subColor);
      }
    }
    .val {
      @include useTheme {
        color: getVar(color);
      }
      &.clickable {
        cursor: pointer;
        color: var(--baseColor) !important;
      }
    }
  }
}
</style>
