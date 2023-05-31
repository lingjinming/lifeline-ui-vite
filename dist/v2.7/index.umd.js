!function(t,a){var e=document.createElement("style");e.textContent='*{box-sizing:border-box;text-decoration:none;list-style:none;font-size:14px;transition:all .3s}button{border:none;border-radius:4px;padding:5px 10px}button:hover{cursor:pointer;opacity:.85}:root{--baseColor:#2395ff;--baseTxtColor:#333;--baseSubTxtColor:#666666;--baseBgColor:#2395ff;--baseBorderColor:#2395ff;--baseWarningColor:#f3b109;--baseBorderRadius:3px;--baseBtnBgColor:#2395ff}.l-button[data-v-09caaf9d]{min-width:45px;height:45px;line-height:45px;padding:0}.l-button-circle[data-v-09caaf9d]{border-radius:50%}.l-button-span[data-v-09caaf9d]{margin:0 5px}.l-button[data-v-09caaf9d]:hover{background:var(--baseBtnBgColor)!important;color:#fff!important;transform:scale(1.05)}.l-tabs-box[data-v-801a2ada]{position:relative;background:#fff;border-radius:var(--baseBorderRadius);display:flex;justify-content:space-around;gap:15px;padding:0 20px;margin-bottom:20px}.l-tabs-box-item[data-v-801a2ada]{position:relative;background:#fff;flex:1;display:flex;cursor:pointer;padding:15px 20px;align-items:center;color:var(--baseTxtColor)}.l-tabs-box-item[data-v-801a2ada]:hover:after,.l-tabs-box-item.act[data-v-801a2ada]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background:var(--baseColor);animation:grow-801a2ada .3s 1}@keyframes grow-801a2ada{0%{width:0%}}.l-tabs-box-content[data-v-801a2ada]{display:flex;flex-direction:column;align-items:flex-start}.l-tabs-box-content h3[data-v-801a2ada]{margin:0;padding:0;font-size:18px;line-height:25px;color:var(--baseTxtColor)}.l-tabs-box-content p[data-v-801a2ada]{margin:0;padding:0;font-size:16px;line-height:20px;color:var(--baseSubTxtColor)}.l-tabs-box-img[data-v-801a2ada]{width:45px;height:45px;margin-right:15px}.l-tabs-box.is-gap[data-v-801a2ada]{background:transparent;padding:0}.l-common-wrap[data-v-72f0af99]{position:relative;background:#fff;border-radius:var(--baseBorderRadius)}.l-common-wrap-tit[data-v-72f0af99]{position:relative}.l-common-wrap-tit h4[data-v-72f0af99]{height:45px;line-height:45px;padding-left:20px}.l-common-wrap-con[data-v-72f0af99]{padding:20px;height:calc(100% - 45px)}\n',document.head.appendChild(e),"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],a):a((t="undefined"!=typeof globalThis?globalThis:t||self).index={},t.Vue)}(this,(function(t,a){"use strict";a.util.warn;function e(t,a,e,o,n,l,i,s){var r,d="function"==typeof t?t.options:t;if(a&&(d.render=a,d.staticRenderFns=e,d._compiled=!0),o&&(d.functional=!0),l&&(d._scopeId="data-v-"+l),i?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=r):n&&(r=s?function(){n.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(d.functional){d._injectStyles=r;var c=d.render;d.render=function(t,a){return r.call(a),c(t,a)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,r):[r]}return{exports:t,options:d}}const o=e(a.defineComponent({name:"LButton",props:{color:{default:"#919191",type:String},bgColor:{default:"#fff",type:String},lIcon:{default:"",type:String},rIcon:{default:"",type:String},isCircle:{default:!1,type:Boolean},name:{default:"",type:String}},setup:(t,e)=>({padding:a.computed((()=>t.lIcon||t.rIcon||t.name?(t.lIcon||t.rIcon)&&(t.name||t.lIcon||t.rIcon)?"0 15px":"0":"0 15px"))})}),(function(){var t=this,a=t._self._c;return t._self._setupProxy,a("button",{staticClass:"l-button",class:{"l-button-circle":t.isCircle},style:{backgroundColor:t.bgColor,color:t.color,padding:t.padding}},[t.lIcon?a("i",{staticClass:"l-iconfont",class:"l-icon-"+t.lIcon}):t._e(),t._t("default"),t.name?a("span",{staticClass:"l-button-span"},[t._v(t._s(t.name))]):t._e(),t.rIcon?a("i",{staticClass:"l-iconfont",class:"l-icon-"+t.rIcon}):t._e()],2)}),[],!1,null,"09caaf9d",null,null).exports;const n=e(a.defineComponent({__name:"index",props:{tabs:{default:()=>[{label:"default label"}],type:Array},value:{default:"",type:String},modelValue:{default:"",type:String},gap:{default:0,type:Number}},emits:["tab-click","update:modelValue"],setup(t,{emit:e}){const o=t,n=a.ref(o.modelValue);return a.watch((()=>o.modelValue),(t=>{console.log("modelValue--\x3e",t),n.value=t||o.tabs[0].label}),{immediate:!0,deep:!0}),{__sfc:!0,props:o,activeName:n,emit:e,clickTab:t=>{n.value=t.label,e("update:modelValue",t.label),e("tab-click",t)}}}}),(function(){var t=this,a=t._self._c,e=t._self._setupProxy;return a("div",{staticClass:"l-tabs-box",class:{"is-gap":t.gap},style:{gap:t.gap+"px"}},t._l(t.tabs,(function(o,n){return a("div",{key:n,class:["l-tabs-box-item",{act:e.activeName==o.label}],on:{click:function(t){return e.clickTab(o)}}},[o.img?a("img",{staticClass:"l-tabs-box-img",attrs:{src:o.img}}):t._e(),a("div",{staticClass:"l-tabs-box-content"},[a("h3",[t._v(" "+t._s(o.label)+" ")]),o.subTit?a("p",[t._v(" "+t._s(o.subTit)+" ")]):t._e()])])})),0)}),[],!1,null,"801a2ada",null,null).exports;const l=e(a.defineComponent({__name:"index",props:{tit:{type:String,default:"默认标题"}},setup:t=>({__sfc:!0})}),(function(){var t=this,a=t._self._c;return t._self._setupProxy,a("div",{staticClass:"l-common-wrap"},[a("section",{staticClass:"l-common-wrap-tit"},[a("h4",[t._v(t._s(t.tit))])]),a("section",{staticClass:"l-common-wrap-con"},[t._t("default")],2)])}),[],!1,null,"72f0af99",null,null).exports,i={install(t,a){t.component("LButton",o),t.component("LTabs",n),t.component("LCommonWrap",l)}};t.LButton=o,t.LCommonWrap=l,t.LTabs=n,t.default=i,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
