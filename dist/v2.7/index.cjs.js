"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue");t.util.warn;function e(t,e,n,o,l,s,a,i){var r,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),l&&l.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=r):l&&(r=i?function(){l.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:l),r)if(c.functional){c._injectStyles=r;var u=c.render;c.render=function(t,e){return r.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,r):[r]}return{exports:t,options:c}}const n=e(t.defineComponent({name:"LButton",props:{color:{default:"#919191",type:String},bgColor:{default:"#fff",type:String},lIcon:{default:"",type:String},rIcon:{default:"",type:String},isCircle:{default:!1,type:Boolean},name:{default:"",type:String}},setup:(e,n)=>({padding:t.computed((()=>e.lIcon||e.rIcon||e.name?(e.lIcon||e.rIcon)&&(e.name||e.lIcon||e.rIcon)?"0 15px":"0":"0 15px"))})}),(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("button",{staticClass:"l-button",class:{"l-button-circle":t.isCircle},style:{backgroundColor:t.bgColor,color:t.color,padding:t.padding}},[t.lIcon?e("i",{staticClass:"l-iconfont",class:"l-icon-"+t.lIcon}):t._e(),t._t("default"),t.name?e("span",{staticClass:"l-button-span"},[t._v(t._s(t.name))]):t._e(),t.rIcon?e("i",{staticClass:"l-iconfont",class:"l-icon-"+t.rIcon}):t._e()],2)}),[],!1,null,"09caaf9d",null,null).exports;const o=e(t.defineComponent({__name:"index",props:{tabs:{default:()=>[{label:"default label"}],type:Array},value:{default:"",type:String},modelValue:{default:"",type:String},gap:{default:0,type:Number}},emits:["tab-click","update:modelValue"],setup(e,{emit:n}){const o=e;return t.watch((()=>o.modelValue),(t=>{t||n("update:modelValue",o.tabs[0].label)}),{immediate:!0,deep:!0}),{__sfc:!0,props:o,emit:n,clickTab:t=>{n("update:modelValue",t.label),n("tab-click",t)}}}}),(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"l-tabs-box",class:{"is-gap":t.gap},style:{gap:t.gap+"px"}},t._l(t.tabs,(function(o,l){return e("div",{key:l,class:["l-tabs-box-item",{act:t.modelValue==o.label}],on:{click:function(t){return n.clickTab(o)}}},[o.img?e("img",{staticClass:"l-tabs-box-img",attrs:{src:o.img}}):t._e(),e("div",{staticClass:"l-tabs-box-content"},[e("h3",[t._v(" "+t._s(o.label)+" ")]),o.subTit?e("p",[t._v(" "+t._s(o.subTit)+" ")]):t._e()])])})),0)}),[],!1,null,"6223a7c9",null,null).exports;const l=e(t.defineComponent({__name:"index",props:{tit:{type:String,default:"默认标题"}},setup:t=>({__sfc:!0})}),(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"l-common-wrap"},[e("section",{staticClass:"l-common-wrap-tit"},[e("h4",[t._v(t._s(t.tit))])]),e("section",{staticClass:"l-common-wrap-con"},[t._t("default")],2)])}),[],!1,null,"72f0af99",null,null).exports,s={install(t,e){t.component("LButton",n),t.component("LTabs",o),t.component("LCommonWrap",l)}};exports.LButton=n,exports.LCommonWrap=l,exports.LTabs=o,exports.default=s;
