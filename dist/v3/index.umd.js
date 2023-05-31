var __vite_style__=document.createElement("style");__vite_style__.innerHTML='*{box-sizing:border-box;text-decoration:none;list-style:none;font-size:14px;transition:all .3s}button{border:none;border-radius:4px;padding:5px 10px}button:hover{cursor:pointer;opacity:.85}:root{--baseColor:#2395ff;--baseTxtColor:#333;--baseSubTxtColor:#666666;--baseBgColor:#2395ff;--baseBorderColor:#2395ff;--baseWarningColor:#f3b109;--baseBorderRadius:3px;--baseBtnBgColor:#2395ff}.l-button[data-v-4c56a5a4]{min-width:45px;height:45px;line-height:45px;padding:0}.l-button-circle[data-v-4c56a5a4]{border-radius:50%}.l-button-span[data-v-4c56a5a4]{margin:0 5px}.l-button[data-v-4c56a5a4]:hover{background:var(--baseBtnBgColor)!important;color:#fff!important;transform:scale(1.05)}.l-tabs-box[data-v-f730796a]{position:relative;background:#fff;border-radius:var(--baseBorderRadius);display:flex;justify-content:space-around;gap:15px;padding:0 20px;margin-bottom:20px}.l-tabs-box-item[data-v-f730796a]{position:relative;background:#fff;flex:1;display:flex;cursor:pointer;padding:15px 20px;align-items:center;color:var(--baseTxtColor)}.l-tabs-box-item[data-v-f730796a]:hover:after,.l-tabs-box-item.act[data-v-f730796a]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background:var(--baseColor);animation:grow-f730796a .3s 1}@keyframes grow-f730796a{0%{width:0%}}.l-tabs-box-content[data-v-f730796a]{display:flex;flex-direction:column;align-items:flex-start}.l-tabs-box-content h3[data-v-f730796a]{margin:0;padding:0;font-size:18px;line-height:25px;color:var(--baseTxtColor)}.l-tabs-box-content p[data-v-f730796a]{margin:0;padding:0;font-size:16px;line-height:20px;color:var(--baseSubTxtColor)}.l-tabs-box-img[data-v-f730796a]{width:45px;height:45px;margin-right:15px}.l-tabs-box.is-gap[data-v-f730796a]{background:transparent;padding:0}.l-common-wrap[data-v-5ac1dc95]{position:relative;background:#fff;border-radius:var(--baseBorderRadius)}.l-common-wrap-tit[data-v-5ac1dc95]{position:relative}.l-common-wrap-tit h4[data-v-5ac1dc95]{height:45px;line-height:45px;padding-left:20px}.l-common-wrap-con[data-v-5ac1dc95]{padding:20px;height:calc(100% - 45px)}\n',document.head.appendChild(__vite_style__),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).index={},e.Vue)}(this,(function(e,t){"use strict";var o=(e,t)=>{const o=e.__vccOpts||e;for(const[a,n]of t)o[a]=n;return o};const a=t.defineComponent({name:"LButton",props:{color:{default:"#919191",type:String},bgColor:{default:"#fff",type:String},lIcon:{default:"",type:String},rIcon:{default:"",type:String},isCircle:{default:!1,type:Boolean},name:{default:"",type:String}},setup:(e,o)=>({padding:t.computed((()=>e.lIcon||e.rIcon||e.name?(e.lIcon||e.rIcon)&&(e.name||e.lIcon||e.rIcon)?"0 15px":"0":"0 15px"))})}),n={key:1,class:"l-button-span"};var l=o(a,[["render",function(e,o,a,l,r,i){return t.openBlock(),t.createElementBlock("button",{class:t.normalizeClass(["l-button",{"l-button-circle":e.isCircle}]),style:t.normalizeStyle({backgroundColor:e.bgColor,color:e.color,padding:e.padding})},[e.lIcon?(t.openBlock(),t.createElementBlock("i",{key:0,class:t.normalizeClass(["l-iconfont","l-icon-"+e.lIcon])},null,2)):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"default",{},void 0,!0),e.name?(t.openBlock(),t.createElementBlock("span",n,t.toDisplayString(e.name),1)):t.createCommentVNode("",!0),e.rIcon?(t.openBlock(),t.createElementBlock("i",{key:2,class:t.normalizeClass(["l-iconfont","l-icon-"+e.rIcon])},null,2)):t.createCommentVNode("",!0)],6)}],["__scopeId","data-v-4c56a5a4"]]);const r=["onClick"],i=["src"],c={class:"l-tabs-box-content"},s={key:0};var d=o(t.defineComponent({__name:"index",props:{tabs:{default:()=>[{label:"default label"}],type:Array},value:{default:"",type:String},modelValue:{default:"",type:String},gap:{default:0,type:Number}},emits:["tab-click","update:modelValue"],setup(e,{emit:o}){const a=e,n=t.ref(a.modelValue);return t.watch((()=>a.modelValue),(e=>{console.log("modelValue--\x3e",e),n.value=e||a.tabs[0].label}),{immediate:!0,deep:!0}),(a,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["l-tabs-box",{"is-gap":e.gap}]),style:t.normalizeStyle({gap:e.gap+"px"})},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.tabs,((e,a)=>(t.openBlock(),t.createElementBlock("div",{key:a,class:t.normalizeClass(["l-tabs-box-item",{act:t.unref(n)==e.label}]),onClick:t=>(e=>{n.value=e.label,o("update:modelValue",e.label),o("tab-click",e)})(e)},[e.img?(t.openBlock(),t.createElementBlock("img",{key:0,class:"l-tabs-box-img",src:e.img},null,8,i)):t.createCommentVNode("",!0),t.createElementVNode("div",c,[t.createElementVNode("h3",null,t.toDisplayString(e.label),1),e.subTit?(t.openBlock(),t.createElementBlock("p",s,t.toDisplayString(e.subTit),1)):t.createCommentVNode("",!0)])],10,r)))),128))],6))}}),[["__scopeId","data-v-f730796a"]]);const p={class:"l-common-wrap"},m={class:"l-common-wrap-tit"},b={class:"l-common-wrap-con"};var u=o(t.defineComponent({__name:"index",props:{tit:{type:String,default:"默认标题"}},setup:e=>(o,a)=>(t.openBlock(),t.createElementBlock("div",p,[t.createElementVNode("section",m,[t.createElementVNode("h4",null,t.toDisplayString(e.tit),1)]),t.createElementVNode("section",b,[t.renderSlot(o.$slots,"default",{},void 0,!0)])]))}),[["__scopeId","data-v-5ac1dc95"]]),f={install(e,t){e.component("LButton",l),e.component("LTabs",d),e.component("LCommonWrap",u)}};e.LButton=l,e.LCommonWrap=u,e.LTabs=d,e.default=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));