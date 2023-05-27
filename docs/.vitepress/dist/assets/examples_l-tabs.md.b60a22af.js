import{a2 as d,_ as g,D,o as m,c as h,G as y,B as i,z as s,a as l,O as E}from"./chunks/framework.f956f821.js";const{defineComponent:x}=d,A=x({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:a,Fragment:o,openBlock:n,createElementBlock:c}=d;function r(t,F){const u=e("l-button"),C=e("l-tabs");return n(),c(o,null,[a(u,{style:{"margin-bottom":"20px"},name:"切换tab间隔和选中",onClick:t.toggleGap},null,8,["onClick"]),a(C,{modelValue:t.activeName,"onUpdate:modelValue":F[0]||(F[0]=b=>t.activeName=b),tabs:t.tabs,gap:t.gap,onTabClick:t.handleClick},null,8,["modelValue","tabs","gap","onTabClick"])],64)}return{render:r,...{data(){return{gap:0,activeName:"",tabs:[{label:"nestjs",params:{key1:"val1"}},{label:"nestjs2",subTit:"nestjs",params:{key2:"val2"}},{label:"nestjs3",subTit:"nestjs",img:"https://www.nestjs.com.cn/img/logo.png",params:{key1:"val1",key2:"val2"}}]}},methods:{handleClick(t){console.log(this.activeName)},toggleGap(){this.activeName="nestjs3",this.gap==20?this.gap=0:this.gap=20}}}}}()}}),j=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/l-tabs.md","filePath":"examples/l-tabs.md","lastUpdated":null}'),v=s("h2",{id:"ltabs-用法",tabindex:"-1"},[l("LTabs 用法 "),s("a",{class:"header-anchor",href:"#ltabs-用法","aria-label":'Permalink to "LTabs 用法"'},"​")],-1),k=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"l-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"style"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"margin-bottom:20px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"name"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"切换tab间隔和选中"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"toggleGap"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"l-tabs")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"v-model"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"activeName"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":tabs"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"tabs"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":gap"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"gap"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@tab-click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"handleClick"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  ></"),s("span",{style:{color:"#F07178"}},"l-tabs"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"data"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      gap"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      activeName"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#89DDFF"}},"''"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      tabs"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"nestjs"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          params"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            key1"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"val1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"nestjs2"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          subTit"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"nestjs"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          params"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            key2"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"val2"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"nestjs3"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          subTit"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"nestjs"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          img"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://www.nestjs.com.cn/img/logo.png"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          params"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            key1"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"val1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            key2"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"val2"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      ]"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"methods"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"handleClick"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"tab"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"activeName"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"toggleGap"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"activeName"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"nestjs3"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"gap"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"=="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"20"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"?"),s("span",{style:{color:"#F07178"}}," ("),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"gap"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#F07178"}},") "),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," ("),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"gap"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"20"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),_=E('<h2 id="tabs-属性" tabindex="-1">Tabs 属性 <a class="header-anchor" href="#tabs-属性" aria-label="Permalink to &quot;Tabs 属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th style="text-align:center;">描述</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选参数</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td style="text-align:center;">选中项名称</td><td style="text-align:center;">String</td><td style="text-align:center;">--</td><td style="text-align:center;">tabs[0][&#39;label&#39;]</td></tr><tr><td>tabs</td><td style="text-align:center;">tab数据</td><td style="text-align:center;">[TabsItems]</td><td style="text-align:center;">--</td><td style="text-align:center;">[]</td></tr><tr><td>gap</td><td style="text-align:center;">tab间隔</td><td style="text-align:center;">Number</td><td style="text-align:center;">--</td><td style="text-align:center;">0</td></tr></tbody></table><h2 id="tabsitems-attributes" tabindex="-1">TabsItems Attributes <a class="header-anchor" href="#tabsitems-attributes" aria-label="Permalink to &quot;TabsItems Attributes&quot;">​</a></h2><table><thead><tr><th>属性名</th><th style="text-align:center;">描述</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选参数</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td>label</td><td style="text-align:center;">名称</td><td style="text-align:center;">String</td><td style="text-align:center;">--</td><td style="text-align:center;">--</td></tr><tr><td>subTit</td><td style="text-align:center;">副标题</td><td style="text-align:center;">String</td><td style="text-align:center;">--</td><td style="text-align:center;">--</td></tr><tr><td>img</td><td style="text-align:center;">图片路径</td><td style="text-align:center;">String</td><td style="text-align:center;">--</td><td style="text-align:center;">--</td></tr><tr><td>params</td><td style="text-align:center;">额外参数</td><td style="text-align:center;">Object</td><td style="text-align:center;">--</td><td style="text-align:center;">--</td></tr></tbody></table><h2 id="tabs-events" tabindex="-1">Tabs Events <a class="header-anchor" href="#tabs-events" aria-label="Permalink to &quot;Tabs Events&quot;">​</a></h2><table><thead><tr><th>事件名</th><th style="text-align:center;">描述</th><th style="text-align:center;">回调参数</th></tr></thead><tbody><tr><td>tab-click</td><td style="text-align:center;">tab 点击事件</td><td style="text-align:center;">当前 tab 实例</td></tr></tbody></table>',6);function B(e,a,o,n,c,r){const p=D("render-demo-0"),t=D("demo");return m(),h("div",null,[v,y(t,{customClass:"undefined",sourceCode:`<template>
  <l-button style="margin-bottom:20px" name="切换tab间隔和选中" @click="toggleGap" />
  <l-tabs
    v-model="activeName"
    :tabs="tabs"
    :gap="gap"
    @tab-click="handleClick"
  ></l-tabs>
</template>
<script>
export default {
  data() {
    return {
      gap: 0,
      activeName:'',
      tabs: [
        {
          label: "nestjs",
          params: {
            key1: "val1",
          },
        },
        {
          label: "nestjs2",
          subTit: "nestjs",
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
      console.log(this.activeName);
    },
    toggleGap() {
      this.activeName = 'nestjs3'
      this.gap == 20 ? (this.gap = 0) : (this.gap = 20);
    },
  },
};
<\/script>
`},{highlight:i(()=>[k]),default:i(()=>[y(p)]),_:1}),_])}const N=g(A,[["render",B]]);export{j as __pageData,N as default};
