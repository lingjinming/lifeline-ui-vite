<template>
  <div
    class="l-tabs-box"
    :class="{ 'is-gap': gap }"
    :style="{ gap: gap + 'px' }"
  >
    <div
      v-for="(item, i) in tabs"
      :key="i"
      :class="[
        'l-tabs-box-item',
        {
          act: activeName == item.label,
        },
      ]"
      @click="clickTab(item)"
    >
      <!-- tab左侧img -->
      <img class="l-tabs-box-img" v-if="item.img" :src="item.img" />
      <!-- tab右侧内容 -->
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
<script lang="ts" setup>
import { defineComponent, PropType, h, isVue2, ref, onMounted, watch } from "vue-demi";
interface ILTabItem {
  label: String;
  img?: String;
  subTit?: String;
  params?: any;
}
const props = defineProps({
  tabs: {
    default() {
      return [{ label: "default label" }];
    },
    type: Array as () => PropType<ILTabItem[]>,
  },
  value: {
    default: "",
    type: String,
  },
  modelValue: {
    default: "",
    type: String,
  },
  gap: {
    default: 0,
    type: Number,
  },
});
const activeName = ref(props.modelValue)
const emit = defineEmits(["tab-click", "update:modelValue"]);

const clickTab = (item: ILTabItem) => {
  activeName.value = item.label
  emit("update:modelValue", item.label);
  emit("tab-click", item);
};
watch(() => props.modelValue,(newval) => {
  console.log('modelValue-->',newval)
  if(!newval){
    activeName.value =  (props as any).tabs[0]['label']
  }else{
    activeName.value = newval
  }
},{immediate:true,deep:true})
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
    background: #fff;
    flex: 1;
    display: flex;
    cursor: pointer;
    padding: 15px 20px;
    align-items: center;
    color: var(--baseTxtColor);
    &:hover::after,
    &.act::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--baseColor);
      animation: grow 0.3s 1;
      @keyframes grow {
        0% {
          width: 0%;
        }
      }
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      margin: 0;
      padding: 0;
      font-size: 18px;
      line-height: 25px;
      color: var(--baseTxtColor);
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 16px;
      line-height: 20px;
      color: var(--baseSubTxtColor);
    }
  }
  &-img {
    width: 45px;
    height: 45px;
    margin-right: 15px;
  }
  &.is-gap {
    background: transparent;
    padding: 0;
  }
}
</style>
