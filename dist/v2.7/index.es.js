import Vue, { defineComponent, computed, ref, watch, useSlots } from "vue";
const reset = "";
const index$1 = "";
Vue.util.warn;
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
const index_vue_vue_type_style_index_0_scoped_4fc28b41_lang = "";
function normalizeComponent(scriptExports, render5, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render5) {
    options.render = render5;
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
var _sfc_render$3 = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("button", _vm._b({
    staticClass: "l-button",
    class: {
      "l-button-circle": _vm.isCircle
    },
    style: {
      backgroundColor: _vm.bgColor,
      color: _vm.color,
      padding: _vm.padding
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.click
    }
  }, "button", _vm.$attrs, false), [_vm.lIcon ? _c("i", {
    staticClass: "l-iconfont",
    class: "l-icon-" + _vm.lIcon
  }) : _vm._e(), _vm._t("default"), _vm.name ? _c("span", {
    staticClass: "l-button-span"
  }, [_vm._v(_vm._s(_vm.name))]) : _vm._e(), _vm.rIcon ? _c("i", {
    staticClass: "l-iconfont",
    class: "l-icon-" + _vm.rIcon
  }) : _vm._e()], 2);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent(_sfc_main$3, _sfc_render$3, _sfc_staticRenderFns$3, false, null, "4fc28b41", null, null);
const LButton = __component__$3.exports;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
    },
    clickable: {
      default: true,
      type: Boolean
    }
  },
  emits: ["tab-click", "update:modelValue"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const activeName = ref(props.modelValue);
    const clickTab = (item) => {
      if (!props.clickable)
        return;
      activeName.value = item.label;
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
const index_vue_vue_type_style_index_0_scoped_b667ad94_lang = "";
var _sfc_render$2 = function render2() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("section", {
    staticClass: "l-tabs-box",
    class: {
      "is-gap": _vm.gap
    },
    style: {
      gap: _vm.gap + "px"
    },
    attrs: {
      "data-theme": _vm.dataTheme
    }
  }, _vm._l(_vm.tabs, function(item, i) {
    return _c("div", {
      key: i,
      class: ["l-tabs-box-item", {
        act: _vm.clickable ? _setup.activeName == item.label : _setup.activeName = ""
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
    }, [_c("h3", [_vm._v(" " + _vm._s(item.label) + " ")]), _c("p", [_vm._v(" " + _vm._s(item.subTit) + " ")])])]);
  }), 0);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent(_sfc_main$2, _sfc_render$2, _sfc_staticRenderFns$2, false, null, "b667ad94", null, null);
const LTabs = __component__$2.exports;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    dataTheme: {
      default: "dark",
      type: String
    },
    tit: {
      type: String,
      default: "默认标题"
    },
    titBg: {
      type: String,
      default: "https://www.nestjs.com.cn/img/logo.png"
    },
    conBg: {
      type: String,
      default: "/img/logo.png"
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
    const conStyle = computed(() => {
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
      conStyle,
      closeWrap
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_c751acff_lang = "";
var _sfc_render$1 = function render3() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _setup.showWrap ? _c("section", {
    staticClass: "l-wrap",
    attrs: {
      "data-theme": _vm.dataTheme
    }
  }, [_c("h4", {
    staticClass: "l-wrap-tit",
    style: _setup.titStyle
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.tit) + " ")]), _vm._t("btn"), _vm.showBtn && !_setup.slots.btn ? _c("span", {
    staticClass: "img",
    on: {
      "click": _setup.closeWrap
    }
  }) : _vm._e()], 2), _c("section", {
    staticClass: "l-wrap-con",
    style: _setup.conStyle
  }, [_vm._t("default")], 2)]) : _vm._e();
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent(_sfc_main$1, _sfc_render$1, _sfc_staticRenderFns$1, false, null, "c751acff", null, null);
const LWrap = __component__$1.exports;
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    return {
      __sfc: true,
      props,
      getLiStyle,
      emit,
      click
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f419fbd7_lang = "";
var _sfc_render = function render4() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("section", {
    staticClass: "l-detail-box",
    attrs: {
      "data-theme": _vm.dataTheme
    }
  }, [_vm.tit ? _c("h5", {
    staticClass: "l-detail-box-tit"
  }, [_vm._v(_vm._s(_vm.tit))]) : _vm._e(), _c("div", {
    staticClass: "l-detail-box-con"
  }, [_vm.details.length ? _c("ul", {
    staticClass: "l-detail-box-ul"
  }, _vm._l(_vm.details, function(item, i) {
    return _c("li", {
      key: i,
      staticClass: "l-detail-box-li",
      style: _setup.getLiStyle
    }, [_c("p", {
      staticClass: "label"
    }, [_vm._v(_vm._s(item.label) + ":")]), item.clickable ? _c("p", {
      staticClass: "val clickable",
      on: {
        "click": function($event) {
          return _setup.click(item);
        }
      }
    }, [_vm._v(" " + _vm._s(item.val) + " ")]) : _c("p", {
      staticClass: "val"
    }, [_vm._v(_vm._s(item.val))])]);
  }), 0) : _vm._e(), _vm._t("default")], 2)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(_sfc_main, _sfc_render, _sfc_staticRenderFns, false, null, "f419fbd7", null, null);
const LDetail = __component__.exports;
const index = {
  install(app, options) {
    app.component("LButton", LButton);
    app.component("LTabs", LTabs);
    app.component("LWrap", LWrap);
    app.component("LDetail", LDetail);
  }
};
export {
  LButton,
  LDetail,
  LTabs,
  LWrap,
  index as default
};
