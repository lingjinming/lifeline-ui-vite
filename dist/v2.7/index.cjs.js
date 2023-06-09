"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue");t.util.warn;function e(t,e,l,a,s,n,o,i){var c,r="function"==typeof t?t.options:t;if(e&&(r.render=e,r.staticRenderFns=l,r._compiled=!0),a&&(r.functional=!0),n&&(r._scopeId="data-v-"+n),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},r._ssrRegister=c):s&&(c=i?function(){s.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(r.functional){r._injectStyles=c;var u=r.render;r.render=function(t,e){return c.call(e),u(t,e)}}else{var p=r.beforeCreate;r.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:r}}const l=e(t.defineComponent({name:"LButton",props:{color:{default:"#919191",type:String},bgColor:{default:"#fff",type:String},lIcon:{default:"",type:String},rIcon:{default:"",type:String},isCircle:{default:!1,type:Boolean},name:{default:"",type:String}},setup:(e,l)=>({padding:t.computed((()=>e.lIcon||e.rIcon||e.name?(e.lIcon||e.rIcon)&&(e.name||e.lIcon||e.rIcon)?"0 15px":"0":"0 15px")),click:()=>{l.emit("click")}})}),(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("button",t._b({staticClass:"l-button",class:{"l-button-circle":t.isCircle},style:{backgroundColor:t.bgColor,color:t.color,padding:t.padding},attrs:{type:"button"},on:{click:t.click}},"button",t.$attrs,!1),[t.lIcon?e("i",{staticClass:"l-iconfont",class:"l-icon-"+t.lIcon}):t._e(),t._t("default"),t.name?e("span",{staticClass:"l-button-span"},[t._v(t._s(t.name))]):t._e(),t.rIcon?e("i",{staticClass:"l-iconfont",class:"l-icon-"+t.rIcon}):t._e()],2)}),[],!1,null,"4fc28b41",null,null).exports;const a=e(t.defineComponent({__name:"index",props:{dataTheme:{default:"light",type:String},tabs:{default:()=>[{label:"default label1"},{label:"default label2"}],type:Array},value:{default:"",type:String},modelValue:{default:"",type:String},gap:{default:0,type:Number}},emits:["tab-click","update:modelValue"],setup(e,{emit:l}){const a=e,s=t.ref(a.modelValue);return t.watch((()=>a.modelValue),(t=>{s.value=t||a.tabs[0].label}),{immediate:!0,deep:!0}),{__sfc:!0,props:a,emit:l,activeName:s,clickTab:t=>{s.value=t.label,l("update:modelValue",t.label),l("tab-click",t)}}}}),(function(){var t=this,e=t._self._c,l=t._self._setupProxy;return e("section",{staticClass:"l-tabs-box",class:{"is-gap":t.gap},style:{gap:t.gap+"px"},attrs:{"data-theme":t.dataTheme}},t._l(t.tabs,(function(a,s){return e("div",{key:s,class:["l-tabs-box-item",{act:l.activeName==a.label}],on:{click:function(t){return l.clickTab(a)}}},[a.img?e("img",{staticClass:"l-tabs-box-img",attrs:{src:a.img}}):t._e(),e("div",{staticClass:"l-tabs-box-content"},[e("h3",[t._v(" "+t._s(a.label)+" ")]),a.subTit?e("p",[t._v(" "+t._s(a.subTit)+" ")]):t._e()])])})),0)}),[],!1,null,"c37b2f23",null,null).exports;const s=e(t.defineComponent({__name:"index",props:{dataTheme:{default:"dark",type:String},tit:{type:String,default:"默认标题"},titBg:{type:String,default:"https://www.nestjs.com.cn/img/logo.png"},showBtn:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:l}){const a=e;let s=t.ref(!0);const n=t.useSlots();console.log(n);const o=t.computed((()=>({backgroundImage:`url(${a.titBg})`})));return{__sfc:!0,props:a,showWrap:s,emit:l,slots:n,titStyle:o,closeWrap:()=>{s.value=!1,l("close")}}}}),(function(){var t=this,e=t._self._c,l=t._self._setupProxy;return l.showWrap?e("section",{staticClass:"l-wrap",attrs:{"data-theme":t.dataTheme}},[e("h4",{staticClass:"l-wrap-tit",style:l.titStyle},[e("span",[t._v(" "+t._s(t.tit)+" ")]),t._t("btn"),t.showBtn&&!l.slots.btn?e("span",{staticClass:"img",on:{click:l.closeWrap}}):t._e()],2),e("section",{staticClass:"l-wrap-con"},[t._t("default")],2)]):t._e()}),[],!1,null,"f760f227",null,null).exports;const n=e(t.defineComponent({__name:"index",props:{dataTheme:{default:"light",type:String},tit:{default:"",type:String},details:{default:()=>[],type:Array},cols:{default:3,type:Number}},emits:["click"],setup(e,{emit:l}){const a=e,s=t.computed((()=>{let t=a.cols;return"string"==typeof t&&(t=1),{width:`calc(${Math.floor(100/t)}% - 20px)`}}));return{__sfc:!0,props:a,getLiStyle:s,emit:l,click:t=>{l("click",t)}}}}),(function(){var t=this,e=t._self._c,l=t._self._setupProxy;return e("section",{staticClass:"l-detail-box",attrs:{"data-theme":t.dataTheme}},[t.tit?e("h5",{staticClass:"l-detail-box-tit"},[t._v(t._s(t.tit))]):t._e(),e("div",{staticClass:"l-detail-box-con"},[t.details.length?e("ul",{staticClass:"l-detail-box-ul"},t._l(t.details,(function(a,s){return e("li",{key:s,staticClass:"l-detail-box-li",style:l.getLiStyle},[e("p",{staticClass:"label"},[t._v(t._s(a.label)+":")]),a.clickable?e("p",{staticClass:"val clickable",on:{click:function(t){return l.click(a)}}},[t._v(" "+t._s(a.val)+" ")]):e("p",{staticClass:"val"},[t._v(t._s(a.val))])])})),0):t._e(),t._t("default")],2)])}),[],!1,null,"f419fbd7",null,null).exports,o={install(t,e){t.component("LButton",l),t.component("LTabs",a),t.component("LWrap",s),t.component("LDetail",n)}};exports.LButton=l,exports.LDetail=n,exports.LTabs=a,exports.LWrap=s,exports.default=o;
