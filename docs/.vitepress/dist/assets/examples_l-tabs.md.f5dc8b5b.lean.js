import{a2 as i,_ as d,c as h,G as p,B as F,z as s,a as e,O as C,D,o as m}from"./chunks/framework.33c519c2.js";const{defineComponent:u}=i,b=u({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,openBlock:a,createBlock:n}=i;function c(l,r){const t=o("l-tabs");return a(),n(t,{style:{width:"250px"},onTabClick:l.handleClick},null,8,["onTabClick"])}return{render:c,...{methods:{handleClick(l){console.log(l)}}}}}()}}),B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/l-tabs.md","filePath":"examples/l-tabs.md","lastUpdated":1683527900000}'),_=s("h2",{id:"ltabs-用法",tabindex:"-1"},[e("LTabs 用法 "),s("a",{class:"header-anchor",href:"#ltabs-用法","aria-label":'Permalink to "LTabs 用法"'},"​")],-1),A=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"l-tabs"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"style"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"width:250px"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@tab-click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"handleClick"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"l-tabs"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#FFCB6B"}},"methods"),s("span",{style:{color:"#89DDFF"}},":{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"handleClick"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"tab"),s("span",{style:{color:"#F07178"}},")")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"};")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),k=C('<h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>name</th><th style="text-align:center;">des</th><th style="text-align:center;">callback</th></tr></thead><tbody><tr><td>tab-click</td><td style="text-align:center;">tab点击事件</td><td style="text-align:center;">当前tab实例</td></tr></tbody></table>',2);function x(o,a,n,c,y,l){const r=D("render-demo-0"),t=D("demo");return m(),h("div",null,[_,p(t,{customClass:"undefined",sourceCode:`  <template>
      <l-tabs style="width:250px" @tab-click='handleClick'></l-tabs>
  </template>
  <script>
  export default{
    methods:{
      handleClick(tab){
        console.log(tab)
      }
    }
  };
  <\/script>

`},{highlight:F(()=>[A]),default:F(()=>[p(r)]),_:1}),k])}const g=d(b,[["render",x]]);export{B as __pageData,g as default};
