import { defineComponent, computed, openBlock, createElementBlock, mergeProps, normalizeClass, createCommentVNode, renderSlot, toDisplayString, ref, watch, normalizeStyle, Fragment, renderList, unref, createElementVNode, useSlots } from "vue";
var reset = "";
var index$1 = "";
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = defineComponent({
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
    const click = () => {
      ctx.emit("click");
    };
    return {
      padding,
      click
    };
  }
});
const _hoisted_1$3 = {
  key: 1,
  class: "l-button-span"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    type: "button"
  }, _ctx.$attrs, {
    class: ["l-button", {
      "l-button-circle": _ctx.isCircle
    }],
    style: {
      backgroundColor: _ctx.bgColor,
      color: _ctx.color,
      padding: _ctx.padding
    },
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.click && _ctx.click(...args))
  }), [_ctx.lIcon ? (openBlock(), createElementBlock("i", {
    key: 0,
    class: normalizeClass(["l-iconfont", "l-icon-" + _ctx.lIcon])
  }, null, 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, void 0, true), _ctx.name ? (openBlock(), createElementBlock("span", _hoisted_1$3, toDisplayString(_ctx.name), 1)) : createCommentVNode("", true), _ctx.rIcon ? (openBlock(), createElementBlock("i", {
    key: 2,
    class: normalizeClass(["l-iconfont", "l-icon-" + _ctx.rIcon])
  }, null, 2)) : createCommentVNode("", true)], 16);
}
var LButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-7af75446"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$2 = ["data-theme"];
const _hoisted_2$2 = ["onClick"];
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = {
  class: "l-tabs-box-content"
};
const _sfc_main$2 = defineComponent({
  __name: "index",
  props: {
    dataTheme: {
      default: "light",
      type: String
    },
    tabs: {
      default() {
        return [{
          label: "default label1"
        }, {
          label: "default label2"
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
    const activeName = ref(props.modelValue);
    const clickTab = (item) => {
      activeName.value = item.label;
      emit("update:modelValue", item.label);
      emit("tab-click", item);
    };
    watch(() => props.modelValue, (newval) => {
      if (!newval) {
        activeName.value = props.tabs[0]["label"];
      } else {
        activeName.value = newval;
      }
    }, {
      immediate: true,
      deep: true
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["l-tabs-box", {
          "is-gap": __props.gap
        }]),
        "data-theme": __props.dataTheme,
        style: normalizeStyle({
          gap: __props.gap + "px"
        })
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (item, i) => {
        return openBlock(), createElementBlock("div", {
          key: i,
          class: normalizeClass(["l-tabs-box-item", {
            act: unref(activeName) == item.label
          }]),
          onClick: ($event) => clickTab(item)
        }, [item.img ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "l-tabs-box-img",
          src: item.img
        }, null, 8, _hoisted_3$1)) : createCommentVNode("", true), createElementVNode("div", _hoisted_4$1, [createElementVNode("h3", null, toDisplayString(item.label), 1), createElementVNode("p", null, toDisplayString(item.subTit), 1)])], 10, _hoisted_2$2);
      }), 128))], 14, _hoisted_1$2);
    };
  }
});
var LTabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5eabea2a"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _hoisted_1$1 = ["data-theme"];
const _hoisted_2$1 = {
  class: "l-wrap-con"
};
const _sfc_main$1 = defineComponent({
  __name: "index",
  props: {
    dataTheme: {
      default: "dark",
      type: String
    },
    tit: {
      type: String,
      default: "\u9ED8\u8BA4\u6807\u9898"
    },
    titBg: {
      type: String,
      default: "https://www.nestjs.com.cn/img/logo.png"
    },
    showBtn: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    let showWrap = ref(true);
    const slots = useSlots();
    console.log(slots);
    const titStyle = computed(() => {
      return {
        backgroundImage: `url(${props.titBg})`
      };
    });
    const closeWrap = () => {
      showWrap.value = false;
      emit("close");
    };
    return (_ctx, _cache) => {
      return unref(showWrap) ? (openBlock(), createElementBlock("section", {
        key: 0,
        class: "l-wrap",
        "data-theme": __props.dataTheme
      }, [createElementVNode("h4", {
        class: "l-wrap-tit",
        style: normalizeStyle(unref(titStyle))
      }, [createElementVNode("span", null, toDisplayString(__props.tit), 1), renderSlot(_ctx.$slots, "btn", {}, void 0, true), __props.showBtn && !unref(slots).btn ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: "img",
        onClick: closeWrap
      })) : createCommentVNode("", true)], 4), createElementVNode("section", _hoisted_2$1, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])], 8, _hoisted_1$1)) : createCommentVNode("", true);
    };
  }
});
var LWrap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-be93613e"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = ["data-theme"];
const _hoisted_2 = {
  key: 0,
  class: "l-detail-box-tit"
};
const _hoisted_3 = {
  class: "l-detail-box-con"
};
const _hoisted_4 = {
  key: 0,
  class: "l-detail-box-ul"
};
const _hoisted_5 = {
  class: "label"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = {
  key: 1,
  class: "val"
};
const _sfc_main = defineComponent({
  __name: "index",
  props: {
    dataTheme: {
      default: "light",
      type: String
    },
    tit: {
      default: "",
      type: String
    },
    details: {
      default() {
        return [];
      },
      type: Array
    },
    cols: {
      default: 3,
      type: Number
    }
  },
  emits: ["click"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const getLiStyle = computed(() => {
      let val = props.cols;
      if (typeof val == "string") {
        val = 1;
      }
      return {
        width: `calc(${Math.floor(100 / val)}% - 20px)`
      };
    });
    const click = (item) => {
      emit("click", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "l-detail-box",
        "data-theme": __props.dataTheme
      }, [__props.tit ? (openBlock(), createElementBlock("h5", _hoisted_2, toDisplayString(__props.tit), 1)) : createCommentVNode("", true), createElementVNode("div", _hoisted_3, [__props.details.length ? (openBlock(), createElementBlock("ul", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.details, (item, i) => {
        return openBlock(), createElementBlock("li", {
          style: normalizeStyle(unref(getLiStyle)),
          class: "l-detail-box-li",
          key: i
        }, [createElementVNode("p", _hoisted_5, toDisplayString(item.label) + ":", 1), item.clickable ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: "val clickable",
          onClick: ($event) => click(item)
        }, toDisplayString(item.val), 9, _hoisted_6)) : (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(item.val), 1))], 4);
      }), 128))])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, void 0, true)])], 8, _hoisted_1);
    };
  }
});
var LDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-816fb3a4"]]);
var index = {
  install(app, options) {
    app.component("LButton", LButton);
    app.component("LTabs", LTabs);
    app.component("LWrap", LWrap);
    app.component("LDetail", LDetail);
  }
};
export { LButton, LDetail, LTabs, LWrap, index as default };
