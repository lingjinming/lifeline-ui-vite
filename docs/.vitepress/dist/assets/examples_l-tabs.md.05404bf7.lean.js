import{a2 as d,_ as m,D as y,o as g,c as E,G as i,B as u,z as l,a as s,O as h}from"./chunks/framework.159a48cb.js";const{defineComponent:A}=d,x=A({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:e,Fragment:o,openBlock:c,createElementBlock:r}=d;function F(t,D){const C=a("l-button"),n=a("l-tabs");return c(),r(o,null,[e(C,{style:{"margin-bottom":"20px"},name:"切换tab选中",onClick:t.toggleGap},null,8,["onClick"]),e(n,{"data-theme":"light",modelValue:t.activeName,"onUpdate:modelValue":D[0]||(D[0]=b=>t.activeName=b),tabs:t.tabs,gap:0,onTabClick:t.handleClick},null,8,["modelValue","tabs","onTabClick"]),e(n,{"data-theme":"dark",modelValue:t.activeName,tabs:t.tabs,gap:20,clickable:!1,onTabClick:t.handleClick},null,8,["modelValue","tabs","onTabClick"]),e(n,{"data-theme":"dark",modelValue:t.activeName,tabs:t.tabs,gap:20,wrap:""},null,8,["modelValue","tabs"])],64)}return{render:F,...{data(){return{gap:0,activeName:"",tabs:[{label:"nestjs",params:{key1:"val1"}},{label:0,subTit:0,params:{key2:"val2"}},{label:"nestjs3",subTit:"nestjs",img:"https://www.nestjs.com.cn/img/logo.png",params:{key1:"val1",key2:"val2"}}]}},methods:{handleClick(t){console.log(t)},toggleGap(){this.activeName="nestjs3"}}}}}()}}),T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/l-tabs.md","filePath":"examples/l-tabs.md","lastUpdated":1695004132000}');const k=l("h2",{id:"ltabs-用法",tabindex:"-1"},[s("LTabs 用法 "),l("a",{class:"header-anchor",href:"#ltabs-用法","aria-label":'Permalink to "LTabs 用法"'},"​")],-1),v=l("p",null,"可显示副标题和图片的 tabs,配置 data-theme 更换皮肤",-1),B=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"l-button"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"style"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"margin-bottom:20px"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"name"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"切换tab选中"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"@click"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"toggleGap"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"l-tabs")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"data-theme"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"light"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"activeName"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":tabs"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tabs"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":gap"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"0"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"@tab-click"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"handleClick"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"  ></"),l("span",{style:{color:"#F07178"}},"l-tabs"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"<!-- vue2中使用 :modelValue.sync -->")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"l-tabs")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"data-theme"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"dark"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":modelValue.sync"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"activeName"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":tabs"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tabs"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":gap"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"20"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":clickable"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"false"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"@tab-click"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"handleClick"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"  ></"),l("span",{style:{color:"#F07178"}},"l-tabs"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"l-tabs")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"data-theme"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"dark"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":modelValue.sync"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"activeName"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":tabs"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tabs"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},":gap"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"20"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#C792EA"}},"wrap")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"  ></"),l("span",{style:{color:"#F07178"}},"l-tabs"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      gap"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      activeName"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'""'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      tabs"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"nestjs"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          params"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            key1"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"val1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          subTit"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          params"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            key2"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"val2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"nestjs3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          subTit"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"nestjs"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          img"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"https://www.nestjs.com.cn/img/logo.png"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          params"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            key1"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"val1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            key2"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"val2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      ]"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"methods"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"handleClick"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"tab"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#A6ACCD"}},"console"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"log"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"tab"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"toggleGap"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"this."),l("span",{style:{color:"#A6ACCD"}},"activeName"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"nestjs3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#FFCB6B"}},"l-detail-box"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#B2CCD6"}},"margin-bottom"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"20px"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),_=h('<h2 id="tabs-属性" tabindex="-1">Tabs 属性 <a class="header-anchor" href="#tabs-属性" aria-label="Permalink to &quot;Tabs 属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th style="text-align:center;">描述</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选参数</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td>modelValue</td><td style="text-align:center;">选中项名称，vue2 中配合.sync 修饰符使用</td><td style="text-align:center;">String</td><td style="text-align:center;">--</td><td style="text-align:center;">tabs[0][&#39;label&#39;]</td></tr><tr><td>v-model</td><td style="text-align:center;">vue3 中使用，选中项名称</td><td style="text-align:center;">String</td><td style="text-align:center;">--</td><td style="text-align:center;">tabs[0][&#39;label&#39;]</td></tr><tr><td>tabs</td><td style="text-align:center;">tab 数据</td><td style="text-align:center;">[TabsItems]</td><td style="text-align:center;">--</td><td style="text-align:center;">[]</td></tr><tr><td>gap</td><td style="text-align:center;">tab 间隔</td><td style="text-align:center;">Number</td><td style="text-align:center;">--</td><td style="text-align:center;">0</td></tr><tr><td>data-theme</td><td style="text-align:center;">组件皮肤</td><td style="text-align:center;">String</td><td style="text-align:center;">light,dark</td><td style="text-align:center;">light</td></tr><tr><td>clickable</td><td style="text-align:center;">是否可点击，不可点击时无下划线</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true,false</td><td style="text-align:center;">true</td></tr><tr><td>wrap</td><td style="text-align:center;">是否换行</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true,false</td><td style="text-align:center;">false</td></tr></tbody></table><h2 id="tabsitems-属性" tabindex="-1">TabsItems 属性 <a class="header-anchor" href="#tabsitems-属性" aria-label="Permalink to &quot;TabsItems 属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th style="text-align:center;">描述</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选参数</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td>label</td><td style="text-align:center;">名称</td><td style="text-align:center;">String</td><td style="text-align:center;">--</td><td style="text-align:center;">--</td></tr><tr><td>subTit</td><td style="text-align:center;">副标题</td><td style="text-align:center;">String</td><td style="text-align:center;">--</td><td style="text-align:center;">--</td></tr><tr><td>img</td><td style="text-align:center;">图片路径</td><td style="text-align:center;">绝对路径或者 base64</td><td style="text-align:center;">--</td><td style="text-align:center;">--</td></tr><tr><td>params</td><td style="text-align:center;">额外参数</td><td style="text-align:center;">Object</td><td style="text-align:center;">--</td><td style="text-align:center;">--</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th style="text-align:center;">描述</th><th style="text-align:center;">回调参数</th></tr></thead><tbody><tr><td>tab-click</td><td style="text-align:center;">tab 点击事件</td><td style="text-align:center;">当前 tab 实例</td></tr></tbody></table>',6);function f(a,e,o,c,r,F){const p=y("render-demo-0"),t=y("demo");return g(),E("div",null,[k,v,i(t,{customClass:"undefined",sourceCode:`<template>
  <l-button style="margin-bottom:20px" name="切换tab选中" @click="toggleGap" />
  <l-tabs
    data-theme="light"
    v-model="activeName"
    :tabs="tabs"
    :gap="0"
    @tab-click="handleClick"
  ></l-tabs>
  <!-- vue2中使用 :modelValue.sync -->
  <l-tabs
    data-theme="dark"
    :modelValue.sync="activeName"
    :tabs="tabs"
    :gap="20"
    :clickable="false"
    @tab-click="handleClick"
  ></l-tabs>

    <l-tabs
    data-theme="dark"
    :modelValue.sync="activeName"
    :tabs="tabs"
    :gap="20"
    wrap
  ></l-tabs>
</template>
<script>
export default {
  data() {
    return {
      gap: 0,
      activeName: "",
      tabs: [
        {
          label: "nestjs",
          params: {
            key1: "val1",
          },
        },
        {
          label: 0,
          subTit: 0,
          params: {
            key2: "val2",
          },
        },
        {
          label: "nestjs3",
          subTit: "nestjs",
          img: "https://www.nestjs.com.cn/img/logo.png",
          params: {
            key1: "val1",
            key2: "val2",
          },
        },
      ],
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
    toggleGap() {
      this.activeName = "nestjs3";
    },
  },
};
<\/script>
<style>
.l-detail-box {
  margin-bottom: 20px;
}
</style>
`},{highlight:u(()=>[B]),default:u(()=>[i(p)]),_:1}),_])}const V=m(x,[["render",f]]);export{T as __pageData,V as default};
