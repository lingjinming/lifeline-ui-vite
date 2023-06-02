"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e=require("vue"),t=(e,t)=>{const l=e.__vccOpts||e;for(const[o,n]of t)l[o]=n;return l};const l=e.defineComponent({name:"LButton",props:{color:{default:"#919191",type:String},bgColor:{default:"#fff",type:String},lIcon:{default:"",type:String},rIcon:{default:"",type:String},isCircle:{default:!1,type:Boolean},name:{default:"",type:String}},setup:(t,l)=>({padding:e.computed((()=>t.lIcon||t.rIcon||t.name?(t.lIcon||t.rIcon)&&(t.name||t.lIcon||t.rIcon)?"0 15px":"0":"0 15px"))})}),o={key:1,class:"l-button-span"};var n=t(l,[["render",function(t,l,n,a,c,r){return e.openBlock(),e.createElementBlock("button",e.mergeProps({type:"button"},t.$attrs,{class:["l-button",{"l-button-circle":t.isCircle}],style:{backgroundColor:t.bgColor,color:t.color,padding:t.padding}}),[t.lIcon?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(["l-iconfont","l-icon-"+t.lIcon])},null,2)):e.createCommentVNode("",!0),e.renderSlot(t.$slots,"default",{},void 0,!0),t.name?(e.openBlock(),e.createElementBlock("span",o,e.toDisplayString(t.name),1)):e.createCommentVNode("",!0),t.rIcon?(e.openBlock(),e.createElementBlock("i",{key:2,class:e.normalizeClass(["l-iconfont","l-icon-"+t.rIcon])},null,2)):e.createCommentVNode("",!0)],16)}],["__scopeId","data-v-1b52e4bf"]]);const a=["onClick"],c=["src"],r={class:"l-tabs-box-content"},s={key:0};var i=t(e.defineComponent({__name:"index",props:{tabs:{default:()=>[{label:"default label1"},{label:"default label2"}],type:Array},value:{default:"",type:String},modelValue:{default:"",type:String},gap:{default:0,type:Number}},emits:["tab-click","update:modelValue"],setup(t,{emit:l}){const o=t,n=e.ref(o.modelValue);return e.watch((()=>o.modelValue),(e=>{n.value=e||o.tabs[0].label}),{immediate:!0,deep:!0}),(o,i)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["l-tabs-box",{"is-gap":t.gap}]),style:e.normalizeStyle({gap:t.gap+"px"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.tabs,((t,o)=>(e.openBlock(),e.createElementBlock("div",{key:o,class:e.normalizeClass(["l-tabs-box-item",{act:e.unref(n)==t.label}]),onClick:e=>(e=>{n.value=e.label,l("update:modelValue",e.label),l("tab-click",e)})(t)},[t.img?(e.openBlock(),e.createElementBlock("img",{key:0,class:"l-tabs-box-img",src:t.img},null,8,c)):e.createCommentVNode("",!0),e.createElementVNode("div",r,[e.createElementVNode("h3",null,e.toDisplayString(t.label),1),t.subTit?(e.openBlock(),e.createElementBlock("p",s,e.toDisplayString(t.subTit),1)):e.createCommentVNode("",!0)])],10,a)))),128))],6))}}),[["__scopeId","data-v-656e0f9c"]]);const p={key:0,class:"l-wrap"},d={class:"l-wrap-con"};var m=t(e.defineComponent({__name:"index",props:{tit:{type:String,default:"默认标题"},titBg:{type:String,default:"https://www.nestjs.com.cn/img/logo.png"},showBtn:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:l}){const o=t;let n=e.ref(!0);const a=e.useSlots();console.log(a);const c=e.computed((()=>({backgroundImage:`url(${o.titBg})`}))),r=()=>{n.value=!1,l("close")};return(l,o)=>{const s=e.resolveComponent("H4");return e.unref(n)?(e.openBlock(),e.createElementBlock("div",p,[e.createElementVNode("section",{class:"l-wrap-tit",style:e.normalizeStyle(e.unref(c))},[e.createVNode(s,null,{default:e.withCtx((()=>[e.createElementVNode("span",null,e.toDisplayString(t.tit),1),e.renderSlot(l.$slots,"btn",{},void 0,!0),t.showBtn&&!e.unref(a).btn?(e.openBlock(),e.createElementBlock("img",{key:0,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAxRJREFUSEu9VWtIFFEU/s7M7syOuolaRmG1PSyx9M8WCEUaJQZBBdE7eoE9FAkjpCLoBREGQWLZyzKiQiok/4SZZaGYURFtFlFW9o40yV2dnVlnbsy01irrukR2YH7M3HvPd7/zfecMYZCDBjk//iuAAdYDyAAYT7AId595tichD6TaAJsNdo3g1roBjwy8UgOACHCIgF2CXeDh5hng9QJPvAC0/krtB3BaESXGCKo2lFlYBHWTqvL4DplrAxqMBACcEiRLrKAhllmYQN3UpQp8KzxKO/DQNwAA+MwP3mJeFDeZG3Vd/nixMse1s7AaMr6b3yQ9LuXA9jkjl88/ThwnGtx1RSm5kWDLC8rgsq8+sERIWJwvTTp8sIIs1iwTw6f9aCk+tba5qPQRoNO4/Bzn2M1rz5CVjzbWmc9XVbN640LUlvkZ9uFwpbvekDHQRZRUfDM2fl76bfCWFHNFUb6+KNi7wTiaWLj7JCcIw800muZqq6jJaNo69xe7ENHXpjT5WtP4IVOS7jLQCDOX2/MaBI6PinL8osw+ex43z3AtmvgmhNN+QwbrA0q+3jxdHO2oAoeIP0Yz6sa6fB/eZz7NcjSEk7yXBgEsOcBpH3O6ZGXkVGfxbysTsa77D3LfZuddABo9BlzI2vQV2b+ZTDvatPiEY2dzhSmp2wyKPR3ndT059Cl3/VF4uW/AQzkki2AiAxkiJCUuZseeBRGzZhcBxAfekoFp8q0bee0H91dCFtuAWmWgUgVokCwg0h4TsWRdmrRi/XniOLvfjrUmC6uQQWBguu6WL5Wt6iovbUSnux14ZnR7vxEwKlKGWNKzkmz5e8tJFEf5G+65u+5mOkSe7NMy7oDjkwzRdVV5pxbuWuqrr34BuDrCGxWTEocJ+05cJSkyzW/HL+zNy5nKluRXxrt45NkEciTWMaJ4k5nc2aAWrFuElpbWoKOij8g8Vy6XkNWabQhKhE6t40cm1sTd6zXszrWlcVHR1SBEmgxV30l9mZQTlEFwkQdvXA/U8X+9/l//aH99y3BsOijJ+5tF/xTsJ6S4Ia3QeHrnAAAAAElFTkSuQmCC",onClick:r})):e.createCommentVNode("",!0)])),_:3})],4),e.createElementVNode("section",d,[e.renderSlot(l.$slots,"default",{},void 0,!0)])])):e.createCommentVNode("",!0)}}}),[["__scopeId","data-v-77466e72"]]);const u={class:"l-detail-box"},k={class:"l-detail-box-tit"},b={class:"l-detail-box-ul"},g={class:"label"},B=["onClick"],y={key:1,class:"val"};var A=t(e.defineComponent({__name:"index",props:{tit:{default:"详情信息",type:String},details:{default:()=>[],type:Array}},emits:["click"],setup:(t,{emit:l})=>(o,n)=>(e.openBlock(),e.createElementBlock("section",u,[e.createElementVNode("h5",k,e.toDisplayString(t.tit),1),e.createElementVNode("ul",b,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.details,((t,o)=>(e.openBlock(),e.createElementBlock("li",{class:"l-detail-box-li",key:o},[e.createElementVNode("p",g,e.toDisplayString(t.label)+":",1),t.clickable?(e.openBlock(),e.createElementBlock("p",{key:0,class:"val clickable",onClick:e=>(e=>{l("click",e)})(t)},e.toDisplayString(t.val),9,B)):(e.openBlock(),e.createElementBlock("p",y,e.toDisplayString(t.val),1))])))),128))])]))}),[["__scopeId","data-v-f4ed250a"]]),f={install(e,t){e.component("LButton",n),e.component("LTabs",i),e.component("LWrap",m),e.component("LDetail",A)}};exports.LButton=n,exports.LDetail=A,exports.LTabs=i,exports.LWrap=m,exports.default=f;
