import { defineComponent, computed, openBlock, createElementBlock, mergeProps, normalizeClass, createCommentVNode, renderSlot, toDisplayString, ref, watch, normalizeStyle, Fragment, renderList, unref, createElementVNode, useSlots, resolveComponent, createVNode, withCtx } from "vue";
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
    return {
      padding
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
    }
  }), [_ctx.lIcon ? (openBlock(), createElementBlock("i", {
    key: 0,
    class: normalizeClass(["l-iconfont", "l-icon-" + _ctx.lIcon])
  }, null, 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, void 0, true), _ctx.name ? (openBlock(), createElementBlock("span", _hoisted_1$3, toDisplayString(_ctx.name), 1)) : createCommentVNode("", true), _ctx.rIcon ? (openBlock(), createElementBlock("i", {
    key: 2,
    class: normalizeClass(["l-iconfont", "l-icon-" + _ctx.rIcon])
  }, null, 2)) : createCommentVNode("", true)], 16);
}
var LButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-1b52e4bf"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$2 = ["onClick"];
const _hoisted_2$2 = ["src"];
const _hoisted_3$1 = {
  class: "l-tabs-box-content"
};
const _hoisted_4$1 = {
  key: 0
};
const _sfc_main$2 = defineComponent({
  __name: "index",
  props: {
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
            act: unref(activeName) == item.label
          }]),
          onClick: ($event) => clickTab(item)
        }, [item.img ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "l-tabs-box-img",
          src: item.img
        }, null, 8, _hoisted_2$2)) : createCommentVNode("", true), createElementVNode("div", _hoisted_3$1, [createElementVNode("h3", null, toDisplayString(item.label), 1), item.subTit ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(item.subTit), 1)) : createCommentVNode("", true)])], 10, _hoisted_1$2);
      }), 128))], 6);
    };
  }
});
var LTabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-656e0f9c"]]);
var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAxRJREFUSEu9VWtIFFEU/s7M7syOuolaRmG1PSyx9M8WCEUaJQZBBdE7eoE9FAkjpCLoBREGQWLZyzKiQiok/4SZZaGYURFtFlFW9o40yV2dnVlnbsy01irrukR2YH7M3HvPd7/zfecMYZCDBjk//iuAAdYDyAAYT7AId595tichD6TaAJsNdo3g1roBjwy8UgOACHCIgF2CXeDh5hng9QJPvAC0/krtB3BaESXGCKo2lFlYBHWTqvL4DplrAxqMBACcEiRLrKAhllmYQN3UpQp8KzxKO/DQNwAA+MwP3mJeFDeZG3Vd/nixMse1s7AaMr6b3yQ9LuXA9jkjl88/ThwnGtx1RSm5kWDLC8rgsq8+sERIWJwvTTp8sIIs1iwTw6f9aCk+tba5qPQRoNO4/Bzn2M1rz5CVjzbWmc9XVbN640LUlvkZ9uFwpbvekDHQRZRUfDM2fl76bfCWFHNFUb6+KNi7wTiaWLj7JCcIw800muZqq6jJaNo69xe7ENHXpjT5WtP4IVOS7jLQCDOX2/MaBI6PinL8osw+ex43z3AtmvgmhNN+QwbrA0q+3jxdHO2oAoeIP0Yz6sa6fB/eZz7NcjSEk7yXBgEsOcBpH3O6ZGXkVGfxbysTsa77D3LfZuddABo9BlzI2vQV2b+ZTDvatPiEY2dzhSmp2wyKPR3ndT059Cl3/VF4uW/AQzkki2AiAxkiJCUuZseeBRGzZhcBxAfekoFp8q0bee0H91dCFtuAWmWgUgVokCwg0h4TsWRdmrRi/XniOLvfjrUmC6uQQWBguu6WL5Wt6iovbUSnux14ZnR7vxEwKlKGWNKzkmz5e8tJFEf5G+65u+5mOkSe7NMy7oDjkwzRdVV5pxbuWuqrr34BuDrCGxWTEocJ+05cJSkyzW/HL+zNy5nKluRXxrt45NkEciTWMaJ4k5nc2aAWrFuElpbWoKOij8g8Vy6XkNWabQhKhE6t40cm1sTd6zXszrWlcVHR1SBEmgxV30l9mZQTlEFwkQdvXA/U8X+9/l//aH99y3BsOijJ+5tF/xTsJ6S4Ia3QeHrnAAAAAElFTkSuQmCC";
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _hoisted_1$1 = {
  key: 0,
  class: "l-wrap"
};
const _hoisted_2$1 = {
  class: "l-wrap-con"
};
const _sfc_main$1 = defineComponent({
  __name: "index",
  props: {
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
      const _component_H4 = resolveComponent("H4");
      return unref(showWrap) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("section", {
        class: "l-wrap-tit",
        style: normalizeStyle(unref(titStyle))
      }, [createVNode(_component_H4, null, {
        default: withCtx(() => [createElementVNode("span", null, toDisplayString(__props.tit), 1), renderSlot(_ctx.$slots, "btn", {}, void 0, true), __props.showBtn && !unref(slots).btn ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _imports_0,
          onClick: closeWrap
        })) : createCommentVNode("", true)]),
        _: 3
      })], 4), createElementVNode("section", _hoisted_2$1, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])])) : createCommentVNode("", true);
    };
  }
});
var LWrap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-77466e72"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = {
  class: "l-detail-box"
};
const _hoisted_2 = {
  class: "l-detail-box-tit"
};
const _hoisted_3 = {
  class: "l-detail-box-ul"
};
const _hoisted_4 = {
  class: "label"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = {
  key: 1,
  class: "val"
};
const _sfc_main = defineComponent({
  __name: "index",
  props: {
    tit: {
      default: "\u8BE6\u60C5\u4FE1\u606F",
      type: String
    },
    details: {
      default() {
        return [];
      },
      type: Array
    }
  },
  emits: ["click"],
  setup(__props, {
    emit
  }) {
    const click = (item) => {
      emit("click", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h5", _hoisted_2, toDisplayString(__props.tit), 1), createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.details, (item, i) => {
        return openBlock(), createElementBlock("li", {
          class: "l-detail-box-li",
          key: i
        }, [createElementVNode("p", _hoisted_4, toDisplayString(item.label) + ":", 1), item.clickable ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: "val clickable",
          onClick: ($event) => click(item)
        }, toDisplayString(item.val), 9, _hoisted_5)) : (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(item.val), 1))]);
      }), 128))])]);
    };
  }
});
var LDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4ed250a"]]);
var index = {
  install(app, options) {
    app.component("LButton", LButton);
    app.component("LTabs", LTabs);
    app.component("LWrap", LWrap);
    app.component("LDetail", LDetail);
  }
};
export { LButton, LDetail, LTabs, LWrap, index as default };
