import{d as I,j as d,_ as A,o as m,c as h,a as ve,t as $,n as k,C as D,r as E,H as me,F as te,L as ne,z as _,h as _e,e as he,g as ge,b as ye,m as be,p as V,X as oe,l as x,w as F,A as we,B,a3 as Ce,a4 as ke,a5 as se,u as ae,x as xe,a6 as Te,a7 as $e,G as N,T as R,a8 as W,a9 as z,a0 as Oe,K as M,aa as Ee,k as Ie,ab as Ae,ac as Pe,ad as Se,ae as Be,af as De,ag as Le,ah as Ne,ai as Re,aj as He,ak as Fe,al as Me,am as je,an as Qe}from"./chunks/framework.33c519c2.js";import{t as Ve}from"./chunks/theme.8d5e2cb1.js";const Ue=I({name:"LButton",props:{color:{default:"white",type:String},icon:{default:"shuijiance",type:String}},emits:["clickBtn"],setup(e,t){let n=d(0);return{count:n,clickBtn:()=>n.value++}}});function We(e,t,n,o,a,r){return m(),h("button",{style:me({color:e.color}),onClick:t[0]||(t[0]=(...s)=>e.clickBtn&&e.clickBtn(...s))},[ve($(e.count)+" ",1),e.icon?(m(),h("i",{key:0,class:k(["l-iconfont","l-icon-"+e.icon])},null,2)):D("",!0),E(e.$slots,"default",{},void 0,!0)],4)}const ze=A(Ue,[["render",We],["__scopeId","data-v-46dbb98e"]]),Ge=I({name:"LTabs",props:{tabs:{default:[],type:Object},activeName:{default:"",type:String}},setup(e,t){let n=e.activeName?d(e.activeName):d(e.tabs[0].label);return{activeNameNew:n,clickTab:a=>{n.value=a.label,t.emit("tab-click",a)}}}});const Ke={class:"l-tabs-box"},Xe=["onClick"],qe=["src"],Je={class:"l-tabs-box-content"},Ye={key:0};function Ze(e,t,n,o,a,r){return m(),h("div",Ke,[(m(!0),h(te,null,ne(e.tabs,(s,l)=>(m(),h("div",{key:l,class:k(["l-tabs-box-item",{act:e.activeNameNew==s.label}]),onClick:i=>e.clickTab(s)},[s.img?(m(),h("img",{key:0,class:"l-tabs-box-img",src:s.img},null,8,qe)):D("",!0),_("div",Je,[_("h3",null,$(s.label),1),s.subTit?(m(),h("p",Ye,$(s.subTit),1)):D("",!0)])],10,Xe))),128))])}const et=A(Ge,[["render",Ze],["__scopeId","data-v-322aa9ba"]]),tt={install(e,t){e.component("LButton",ze),e.component("LTabs",et)}};const nt=I({name:"DemoBlock",props:{customClass:String}}),ot={class:"source"};function st(e,t,n,o,a,r){return m(),h("div",{class:k(["demo-block",[e.customClass?e.customClass:""]])},[_("div",ot,[E(e.$slots,"default",{},void 0,!0)])],2)}const at=A(nt,[["render",st],["__scopeId","data-v-7446d62c"]]);var G;const L=typeof window<"u",rt=e=>typeof e=="string",j=()=>{};L&&((G=window==null?void 0:window.navigator)!=null&&G.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function P(e){return typeof e=="function"?e():he(e)}function lt(e,t){function n(...o){return new Promise((a,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(a).catch(r)})}return n}function it(e,t=!0,n=!0,o=!1){let a=0,r,s=!0,l=j,i;const p=()=>{r&&(clearTimeout(r),r=void 0,l(),l=j)};return g=>{const f=P(e),v=Date.now()-a,w=()=>i=g();return p(),f<=0?(a=Date.now(),w()):(v>f&&(n||!s)?(a=Date.now(),w()):t&&(i=new Promise((C,u)=>{l=o?u:C,r=setTimeout(()=>{a=Date.now(),s=!0,C(w()),p()},Math.max(0,f-v))})),!n&&!r&&(r=setTimeout(()=>s=!0,f)),s=!1,i)}}function ct(e){return e}function re(e){return ge()?(ye(e),!0):!1}function ut(e,t=200,n=!1,o=!0,a=!1){return lt(it(t,n,o,a),e)}function dt(e,t=!0){be()?V(e):t?e():oe(e)}function pt(e,t,n={}){const{immediate:o=!0}=n,a=d(!1);let r=null;function s(){r&&(clearTimeout(r),r=null)}function l(){a.value=!1,s()}function i(...p){s(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...p)},P(t))}return o&&(a.value=!0,L&&i()),re(l),{isPending:_e(a),start:i,stop:l}}function ft(e){var t;const n=P(e);return(t=n==null?void 0:n.$el)!=null?t:n}const vt=L?window:void 0,mt=L?window.navigator:void 0;function _t(...e){let t,n,o,a;if(rt(e[0])||Array.isArray(e[0])?([n,o,a]=e,t=vt):[t,n,o,a]=e,!t)return j;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],s=()=>{r.forEach(c=>c()),r.length=0},l=(c,g,f,v)=>(c.addEventListener(g,f,v),()=>c.removeEventListener(g,f,v)),i=F(()=>[ft(t),P(a)],([c,g])=>{s(),c&&r.push(...n.flatMap(f=>o.map(v=>l(c,f,v,g))))},{immediate:!0,flush:"post"}),p=()=>{i(),s()};return re(p),p}function ht(e,t=!1){const n=d(),o=()=>n.value=!!e();return o(),dt(o,t),n}function gt(e={}){const{navigator:t=mt,read:n=!1,source:o,copiedDuring:a=1500,legacy:r=!1}=e,s=["copy","cut"],l=ht(()=>t&&"clipboard"in t),i=x(()=>l.value||r),p=d(""),c=d(!1),g=pt(()=>c.value=!1,a);function f(){l.value?t.clipboard.readText().then(u=>{p.value=u}):p.value=C()}if(i.value&&n)for(const u of s)_t(u,f);async function v(u=P(o)){i.value&&u!=null&&(l.value?await t.clipboard.writeText(u):w(u),p.value=u,c.value=!0,g.start())}function w(u){const y=document.createElement("textarea");y.value=u??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function C(){var u,y,S;return(S=(y=(u=document==null?void 0:document.getSelection)==null?void 0:u.call(document))==null?void 0:y.toString())!=null?S:""}return{isSupported:i,text:p,copied:c,copy:v}}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X="__vueuse_ssr_handlers__";K[X]=K[X]||{};var q;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(q||(q={}));var yt=Object.defineProperty,J=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,Y=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ct=(e,t)=>{for(var n in t||(t={}))bt.call(t,n)&&Y(e,n,t[n]);if(J)for(var n of J(t))wt.call(t,n)&&Y(e,n,t[n]);return e};const kt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ct({linear:ct},kt);let xt=0;function Tt(){return"message_"+xt++}const $t=I({setup(){const e=d([]);function t(o){const a=Tt(),r={name:a,...o};e.value.push(r);const s=o.duration;setTimeout(()=>{n(a)},s*1e3)}function n(o){for(const[a,r]of e.value.entries())if(r.name===o){e.value.splice(a,1);break}}return{messages:e,add:t,remove:n}}}),Ot={class:"demoblock-message-content"};function Et(e,t,n,o,a,r){return m(),we(Ce,{name:"demoblock-fade",tag:"div",class:"demoblock-message-wrap"},{default:B(()=>[(m(!0),h(te,null,ne(e.messages,s=>(m(),h("div",{key:s.name,class:k(["demoblock-message",s.type?`demoblock-message-${s.type}`:""])},[_("div",Ot,$(s.content),1)],2))),128))]),_:1})}const Q=A($t,[["render",Et],["__scopeId","data-v-4818cad0"]]);Q.newInstance=(e={})=>{const t=document.createElement("div"),a=ke({render(){return se(Q,{...e,ref:"messageRef"})}}).mount(t).$refs.messageRef;return document.body.appendChild(t.firstElementChild),{add(r){a.add(r)},remove(r){a.remove(r)}}};let H;function It(){return H=H||Q.newInstance(),H}function Z(e,{duration:t=3,type:n=""}){It().add({content:e,duration:t,type:n})}const ee={info(e,t){return Z(e,{...t})},error(e,t){return Z(e,{...t,type:"error"})}};const At={name:"Demo",props:{customClass:String,sourceCode:String},setup(e){const{copy:t}=gt(),n=ae(),o=xe(),a=d(!1),r=d(!1),s=d(!1),l=d(null),i=d(null),p=d(null),c=d(null),g=d(null);F(s,b=>{if(p.value.style.height=b?`${ue.value+1}px`:"0",!b){r.value=!1,c.value.style.left="0",c.value.style.width="auto",w();return}setTimeout(()=>{window.addEventListener("scroll",v),window.addEventListener("resize",v),f()},300)}),V(()=>{oe(()=>{i.value||(l.value.style.width="100%")})}),Te(()=>{w()});const f=()=>{const{top:b,bottom:de,left:pe}=p.value.getBoundingClientRect(),U=window.innerHeight||document.body.clientHeight;r.value=de>U&&b+44<=U,c.value.style.left=r.value?`${pe}px`:"0";const fe=r.value?1:2;c.value.style.width=`${g.value.offsetWidth-fe}px`},v=ut(f,200),w=()=>{window.removeEventListener("scroll",v),window.removeEventListener("resize",v)};F(()=>o.path,b=>{C.value=b.split("/")});const C=d(o.path.split("/")),u=x(()=>C.value[C.value.length-1].split(".")[0]),y=x(()=>`demo-${u.value}`);$e({});const S=()=>{},ie=()=>{s.value=!s.value,a.value=s.value},O=x(()=>{var b;return((b=n.theme.value.demoblock)==null?void 0:b[n.localePath.value])??{"hide-text":"隐藏代码","show-text":"显示代码","copy-button-text":"复制代码片段","copy-success-text":"复制成功"}}),ce=x(()=>s.value?O.value["hide-text"]:O.value["show-text"]),ue=x(()=>i.value?i.value.clientHeight+l.value.clientHeight+20:l.value.clientHeight);return{blockClass:y,hover:a,fixedControl:r,isExpanded:s,locale:O,controlText:ce,onClickControl:ie,highlight:l,description:i,meta:p,control:c,onCopy:async()=>{try{t(e.sourceCode),ee.info(O.value["copy-success-text"])}catch{ee.error(O.value["copy-success-text"])}},goCodepen:S,demoBlock:g}}},Pt={class:"source"},St={ref:"meta",class:"meta"},Bt={key:0,ref:"description",class:"description"},Dt={ref:"highlight",class:"highlight"},Lt={class:"control-button-wrap"};function Nt(e,t,n,o,a,r){return m(),h("div",{ref:"demoBlock",class:k(["demo-block",o.blockClass,n.customClass?n.customClass:"",{hover:o.hover}]),onMouseenter:t[2]||(t[2]=s=>o.hover=!0),onMouseleave:t[3]||(t[3]=s=>o.hover=!1)},[_("div",Pt,[E(e.$slots,"default",{},void 0,!0)]),_("div",St,[e.$slots.description?(m(),h("div",Bt,[E(e.$slots,"description",{},void 0,!0)],512)):D("",!0),_("div",Dt,[E(e.$slots,"highlight",{},void 0,!0)],512)],512),_("div",{ref:"control",class:k(["demo-block-control",{"is-fixed":o.fixedControl,"is-expanded":o.isExpanded}]),onClick:t[1]||(t[1]=(...s)=>o.onClickControl&&o.onClickControl(...s))},[N(R,{name:"arrow-slide"},{default:B(()=>[_("i",{class:k(["control-icon",{"icon-caret-down":!o.isExpanded,"icon-caret-up":o.isExpanded,hovering:o.hover}])},null,2)]),_:1}),N(R,{name:"text-slide"},{default:B(()=>[W(_("span",{class:"control-text"},$(o.controlText),513),[[z,o.hover]])]),_:1}),_("div",Lt,[N(R,{name:"text-slide"},{default:B(()=>[W(_("span",{class:"control-button copy-button",onClick:t[0]||(t[0]=Oe((...s)=>o.onCopy&&o.onCopy(...s),["stop"]))},$(o.locale&&o.locale["copy-button-text"]),513),[[z,o.isExpanded]])]),_:1})])],2)],34)}const Rt=A(At,[["render",Nt],["__scopeId","data-v-c6f29127"]]),Ht={...Ve,enhanceApp({app:e}){e.use(tt),e.component("Demo",Rt),e.component("DemoBlock",at)}};function le(e){if(e.extends){const t=le(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const T=le(Ht),Ft=I({name:"VitePressApp",setup(){const{site:e}=ae();return V(()=>{Ie(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Ae(),Pe(),Se(),T.setup&&T.setup(),()=>se(T.Layout)}});async function Mt(){const e=Qt(),t=jt();t.provide(Be,e);const n=De(e.route);return t.provide(Le,n),t.component("Content",Ne),t.component("ClientOnly",Re),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),T.enhanceApp&&await T.enhanceApp({app:t,router:e,siteData:He}),{app:t,router:e,data:n}}function jt(){return Fe(Ft)}function Qt(){let e=M,t;return Me(n=>{let o=je(n);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),M&&(e=!1),Qe(()=>import(o),[])},T.NotFound)}M&&Mt().then(({app:e,router:t,data:n})=>{t.go().then(()=>{Ee(t.route,n.site),e.mount("#app")})});export{Mt as createApp};
