import Vue, { defineComponent, computed, watch } from "vue";
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
    return {
      __sfc: true,
      props,
      emit,
      clickTab
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_6223a7c9_lang = "";
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
        act: _vm.modelValue == item.label
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
var __component__$1 = /* @__PURE__ */ normalizeComponent(_sfc_main$1, _sfc_render$1, _sfc_staticRenderFns$1, false, null, "6223a7c9", null, null);
const LTabs = __component__$1.exports;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    tit: {
      type: String,
      default: "默认标题"
    }
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_72f0af99_lang = "";
var _sfc_render = function render3() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", {
    staticClass: "l-common-wrap"
  }, [_c("section", {
    staticClass: "l-common-wrap-tit"
  }, [_c("h4", [_vm._v(_vm._s(_vm.tit))])]), _c("section", {
    staticClass: "l-common-wrap-con"
  }, [_vm._t("default")], 2)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(_sfc_main, _sfc_render, _sfc_staticRenderFns, false, null, "72f0af99", null, null);
const LCommonWrap = __component__.exports;
const index = {
  install(app, options) {
    app.component("LButton", LButton);
    app.component("LTabs", LTabs);
    app.component("LCommonWrap", LCommonWrap);
  }
};
export {
  LButton,
  LCommonWrap,
  LTabs,
  index as default
};
