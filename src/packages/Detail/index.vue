<template>
  <section class="l-detail-box" :data-theme="dataTheme">
    <h5 v-if="tit" class="l-detail-box-tit">{{ tit }}</h5>
    <ul class="l-detail-box-ul">
      <li class="l-detail-box-li" v-for="(item, i) in details" :key="i">
        <p class="label">{{ item.label }}:</p>
        <p v-if="item.clickable" class="val clickable" @click="click(item)">{{ item.val }}</p>
        <p v-else class="val">{{ item.val }}</p>
      </li>
    </ul>
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
} from "vue-demi";
interface IDetailItem {
  label: String;
  val: String;
  clickable: Boolean;
}
const props = defineProps({
  dataTheme:{
    default:'light',
    type:String
  },
  tit:{
    default:'',
    type:String
  },
  details: {
    default() {
      return [];
    },
    type: Array as () => PropType<IDetailItem[]>,
  },
});
const emit = defineEmits(['click']);
const click = (item => {
  emit('click',item)
})
</script>

<style lang="scss" scoped>
@import '../../assets/theme/index.scss';
ul,
li,
h5,p {
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
    @include useTheme{
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
  &-ul {
    padding: 15px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    @include useTheme{
      background: getVar(bgColor);
    }
  }
  &-li {
    display: flex;
    align-items: center;
    width: 250px;
    gap: 10px;
    .label {
      @include useTheme{
      color: getVar(subColor);
    }
    }
    .val {
      min-width: 180px;
      word-wrap: break-word;
      @include useTheme{
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
