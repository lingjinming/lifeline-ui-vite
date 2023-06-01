import Vue, { defineComponent, computed, ref, watch, useSlots } from "vue";
const reset = "";
const index$1 = "";
Vue.util.warn;
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
const index_vue_vue_type_style_index_0_scoped_09caaf9d_lang = "";
function normalizeComponent(scriptExports, render4, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render4) {
    options.render = render4;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
var _sfc_render$2 = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("button", {
    staticClass: "l-button",
    class: {
      "l-button-circle": _vm.isCircle
    },
    style: {
      backgroundColor: _vm.bgColor,
      color: _vm.color,
      padding: _vm.padding
    }
  }, [_vm.lIcon ? _c("i", {
    staticClass: "l-iconfont",
    class: "l-icon-" + _vm.lIcon
  }) : _vm._e(), _vm._t("default"), _vm.name ? _c("span", {
    staticClass: "l-button-span"
  }, [_vm._v(_vm._s(_vm.name))]) : _vm._e(), _vm.rIcon ? _c("i", {
    staticClass: "l-iconfont",
    class: "l-icon-" + _vm.rIcon
  }) : _vm._e()], 2);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent(_sfc_main$2, _sfc_render$2, _sfc_staticRenderFns$2, false, null, "09caaf9d", null, null);
const LButton = __component__$2.exports;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    return {
      __sfc: true,
      props,
      emit,
      activeName,
      clickTab
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_1940fa81_lang = "";
var _sfc_render$1 = function render2() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "l-tabs-box",
    class: {
      "is-gap": _vm.gap
    },
    style: {
      gap: _vm.gap + "px"
    }
  }, _vm._l(_vm.tabs, function(item, i) {
    return _c("div", {
      key: i,
      class: ["l-tabs-box-item", {
        act: _setup.activeName == item.label
      }],
      on: {
        "click": function($event) {
          return _setup.clickTab(item);
        }
      }
    }, [item.img ? _c("img", {
      staticClass: "l-tabs-box-img",
      attrs: {
        "src": item.img
      }
    }) : _vm._e(), _c("div", {
      staticClass: "l-tabs-box-content"
    }, [_c("h3", [_vm._v(" " + _vm._s(item.label) + " ")]), item.subTit ? _c("p", [_vm._v(" " + _vm._s(item.subTit) + " ")]) : _vm._e()])]);
  }), 0);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent(_sfc_main$1, _sfc_render$1, _sfc_staticRenderFns$1, false, null, "1940fa81", null, null);
const LTabs = __component__$1.exports;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    tit: {
      type: String,
      default: "默认标题"
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
    return {
      __sfc: true,
      props,
      showWrap,
      emit,
      slots,
      titStyle,
      closeWrap
    };
  }
});
const __$_require_36d30f88__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAxRJREFUSEu9VWtIFFEU/s7M7syOuolaRmG1PSyx9M8WCEUaJQZBBdE7eoE9FAkjpCLoBREGQWLZyzKiQiok/4SZZaGYURFtFlFW9o40yV2dnVlnbsy01irrukR2YH7M3HvPd7/zfecMYZCDBjk//iuAAdYDyAAYT7AId595tichD6TaAJsNdo3g1roBjwy8UgOACHCIgF2CXeDh5hng9QJPvAC0/krtB3BaESXGCKo2lFlYBHWTqvL4DplrAxqMBACcEiRLrKAhllmYQN3UpQp8KzxKO/DQNwAA+MwP3mJeFDeZG3Vd/nixMse1s7AaMr6b3yQ9LuXA9jkjl88/ThwnGtx1RSm5kWDLC8rgsq8+sERIWJwvTTp8sIIs1iwTw6f9aCk+tba5qPQRoNO4/Bzn2M1rz5CVjzbWmc9XVbN640LUlvkZ9uFwpbvekDHQRZRUfDM2fl76bfCWFHNFUb6+KNi7wTiaWLj7JCcIw800muZqq6jJaNo69xe7ENHXpjT5WtP4IVOS7jLQCDOX2/MaBI6PinL8osw+ex43z3AtmvgmhNN+QwbrA0q+3jxdHO2oAoeIP0Yz6sa6fB/eZz7NcjSEk7yXBgEsOcBpH3O6ZGXkVGfxbysTsa77D3LfZuddABo9BlzI2vQV2b+ZTDvatPiEY2dzhSmp2wyKPR3ndT059Cl3/VF4uW/AQzkki2AiAxkiJCUuZseeBRGzZhcBxAfekoFp8q0bee0H91dCFtuAWmWgUgVokCwg0h4TsWRdmrRi/XniOLvfjrUmC6uQQWBguu6WL5Wt6iovbUSnux14ZnR7vxEwKlKGWNKzkmz5e8tJFEf5G+65u+5mOkSe7NMy7oDjkwzRdVV5pxbuWuqrr34BuDrCGxWTEocJ+05cJSkyzW/HL+zNy5nKluRXxrt45NkEciTWMaJ4k5nc2aAWrFuElpbWoKOij8g8Vy6XkNWabQhKhE6t40cm1sTd6zXszrWlcVHR1SBEmgxV30l9mZQTlEFwkQdvXA/U8X+9/l//aH99y3BsOijJ+5tF/xTsJ6S4Ia3QeHrnAAAAAElFTkSuQmCC";
const index_vue_vue_type_style_index_0_scoped_17c7bc91_lang = "";
var _sfc_render = function render3() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _setup.showWrap ? _c("div", {
    staticClass: "l-wrap"
  }, [_c("section", {
    staticClass: "l-wrap-tit",
    style: _setup.titStyle
  }, [_c("H4", [_c("span", [_vm._v(" " + _vm._s(_vm.tit) + " ")]), _vm._t("btn"), _vm.showBtn && !_setup.slots.btn ? _c("img", {
    attrs: {
      "src": __$_require_36d30f88__
    },
    on: {
      "click": _setup.closeWrap
    }
  }) : _vm._e()], 2)], 1), _c("section", {
    staticClass: "l-wrap-con"
  }, [_vm._t("default")], 2)]) : _vm._e();
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(_sfc_main, _sfc_render, _sfc_staticRenderFns, false, null, "17c7bc91", null, null);
const LWrap = __component__.exports;
const index = {
  install(app, options) {
    app.component("LButton", LButton);
    app.component("LTabs", LTabs);
    app.component("LWrap", LWrap);
  }
};
export {
  LButton,
  LTabs,
  LWrap,
  index as default
};
