<template>
  <section
    class="l-tabs-box"
    :data-theme="dataTheme"
    :class="{ 'is-gap': gap, 'flex-wrap': wrap }"
    :style="{ gap: gap + 'px' }"
  >
    <div
      v-for="(item, i) in tabs"
      :key="i"
      :class="[
        'l-tabs-box-item',
        {
          act: clickable ? activeName == item.label : (activeName = ''),
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
        <p>
          {{ item.subTit }}
        </p>
      </div>
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
} from "vue-demi";
interface ILTabItem {
  label: String;
  img?: String;
  subTit?: String;
  params?: any;
}
const props = defineProps({
  dataTheme: {
    default: "light",
    type: String,
  },
  tabs: {
    default() {
      return [{ label: "default label1" }, { label: "default label2" }];
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
  wrap: {
    default: false,
    type: Boolean,
  },
  gap: {
    default: 0,
    type: Number,
  },
  clickable: {
    default: true,
    type: Boolean,
  },
});
const emit = defineEmits(["tab-click", "update:modelValue"]);
const activeName = ref(props.modelValue);

const clickTab = (item: ILTabItem) => {
  if (!props.clickable) return;
  activeName.value = item.label;
  emit("tab-click", item);
};
watch(
  () => props.modelValue,
  (newval) => {
    if (!newval) {
      activeName.value = (props as any).tabs[0]["label"];
    } else {
      activeName.value = newval;
    }
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss" scoped>
@import "../../assets/theme/index.scss";

.l-tabs-box {
  position: relative;
  border-radius: var(--baseBorderRadius);
  display: flex;
  justify-content: space-around;
  gap: 15px;
  margin-bottom: 20px;
  &-item {
    position: relative;
    display: flex;
    width: 100%;
    cursor: pointer;
    padding: 15px 20px;
    align-items: center;

    @include useTheme {
      color: getVar(color);
      background-color: getVar(bgColor);
    }
    &:hover::after,
    &.act::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 15px;
      right: 15px;
      width: calc(100% - 30px);
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
    margin-left: 15px;
    h3 {
      margin: 0;
      padding: 0;
      font-size: 16px;
      line-height: 25px;
      height: 25px;
      white-space: nowrap;
      @include useTheme {
        color: getVar(color);
      }
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 16px;
      line-height: 20px;
      @include useTheme {
        color: getVar(subColor);
      }
    }
  }
  &-img {
    width: 45px;
    height: 45px;
  }
  &.is-gap {
    background: transparent;
    padding: 0;
    justify-content: start;
    .l-tabs-box-item {
      &:hover::after,
      &.act::after {
        left: 10px;
        right: 10px;
        width: calc(100% - 20px);
      }
    }
  }
  &.flex-wrap {
    flex-wrap: wrap;
    .l-tabs-box-item {
      min-width: 245px;
      max-width: fit-content;
    }
  }
}
</style>
