import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, renderSlot, toDisplayString, watch, Fragment, renderList, createElementVNode } from "vue";
var reset = "";
var index$1 = "";
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = defineComponent({
  name: "LButton",
  props: {
    color: {
      default: "#919191",
      type: String
    },
    bgColor: {
      default: "#fff",
      type: String
    },
    lIcon: {
      default: "",
      type: String
    },
    rIcon: {
      default: "",
      type: String
    },
    isCircle: {
      default: false,
      type: Boolean
    },
    name: {
      default: "",
      type: String
    }
  },
  setup(props, ctx) {
    const padding = computed(() => {
      if (!props.lIcon && !props.rIcon && !props.name) {
        return "0 15px";
      } else if (!props.lIcon && !props.rIcon) {
        return "0";
      } else {
        return props.name || props.lIcon || props.rIcon ? "0 15px" : "0";
      }
    });
    return {
      padding
    };
  }
});
const _hoisted_1$2 = {
  key: 1,
  class: "l-button-span"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["l-button", {
      "l-button-circle": _ctx.isCircle
    }]),
    style: normalizeStyle({
      backgroundColor: _ctx.bgColor,
      color: _ctx.color,
      padding: _ctx.padding
    })
  }, [_ctx.lIcon ? (openBlock(), createElementBlock("i", {
    key: 0,
    class: normalizeClass(["l-iconfont", "l-icon-" + _ctx.lIcon])
  }, null, 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, void 0, true), _ctx.name ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(_ctx.name), 1)) : createCommentVNode("", true), _ctx.rIcon ? (openBlock(), createElementBlock("i", {
    key: 2,
    class: normalizeClass(["l-iconfont", "l-icon-" + _ctx.rIcon])
  }, null, 2)) : createCommentVNode("", true)], 6);
}
var LButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-4c56a5a4"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _hoisted_1$1 = ["onClick"];
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = {
  class: "l-tabs-box-content"
};
const _hoisted_4 = {
  key: 0
};
const _sfc_main$1 = defineComponent({
  __name: "index",
  props: {
    tabs: {
      default() {
        return [{
          label: "default label"
        }];
      },
      type: Array
    },
    value: {
      default: "",
      type: String
    },
    modelValue: {
      default: "",
      type: String
    },
    gap: {
      default: 0,
      type: Number
    }
  },
  emits: ["tab-click", "update:modelValue"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const clickTab = (item) => {
      emit("update:modelValue", item.label);
      emit("tab-click", item);
    };
    watch(() => props.modelValue, (newval) => {
      if (!newval) {
        emit("update:modelValue", props.tabs[0]["label"]);
      }
    }, {
      immediate: true,
      deep: true
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["l-tabs-box", {
          "is-gap": __props.gap
        }]),
        style: normalizeStyle({
          gap: __props.gap + "px"
        })
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (item, i) => {
        return openBlock(), createElementBlock("div", {
          key: i,
          class: normalizeClass(["l-tabs-box-item", {
            act: __props.modelValue == item.label
          }]),
          onClick: ($event) => clickTab(item)
        }, [item.img ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "l-tabs-box-img",
          src: item.img
        }, null, 8, _hoisted_2$1)) : createCommentVNode("", true), createElementVNode("div", _hoisted_3$1, [createElementVNode("h3", null, toDisplayString(item.label), 1), item.subTit ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(item.subTit), 1)) : createCommentVNode("", true)])], 10, _hoisted_1$1);
      }), 128))], 6);
    };
  }
});
var LTabs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-10680b4c"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = {
  class: "l-common-wrap"
};
const _hoisted_2 = {
  class: "l-common-wrap-tit"
};
const _hoisted_3 = {
  class: "l-common-wrap-con"
};
const _sfc_main = defineComponent({
  __name: "index",
  props: {
    tit: {
      type: String,
      default: "\u9ED8\u8BA4\u6807\u9898"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("section", _hoisted_2, [createElementVNode("h4", null, toDisplayString(__props.tit), 1)]), createElementVNode("section", _hoisted_3, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])]);
    };
  }
});
var LCommonWrap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ac1dc95"]]);
var index = {
  install(app, options) {
    app.component("LButton", LButton);
    app.component("LTabs", LTabs);
    app.component("LCommonWrap", LCommonWrap);
  }
};
export { LButton, LCommonWrap, LTabs, index as default };
