import{a2 as y,_ as D,c as h,G as p,B as F,z as e,a as s,O as m,D as i,o as C}from"./chunks/framework.33c519c2.js";const{defineComponent:u}=y,b=u({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,openBlock:a,createBlock:n}=y;function c(l,r){const t=o("l-tabs");return a(),n(t,{onTabClick:l.handleClick},null,8,["onTabClick"])}return{render:c,...{methods:{handleClick(l){alert(JSON.stringify(l))}}}}}()}}),B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/LTabs.md","filePath":"examples/LTabs.md","lastUpdated":1683363119000}'),_=e("h2",{id:"ltabs-用法",tabindex:"-1"},[s("LTabs 用法 "),e("a",{class:"header-anchor",href:"#ltabs-用法","aria-label":'Permalink to "LTabs 用法"'},"​")],-1),A=e("div",{class:"language-vue"},[e("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"      "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"l-tabs"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"@tab-click"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"handleClick"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},"></"),e("span",{style:{color:"#F07178"}},"l-tabs"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#C792EA"}},"export"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#FFCB6B"}},"methods"),e("span",{style:{color:"#89DDFF"}},":{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#82AAFF"}},"handleClick"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#A6ACCD"}},"tab"),e("span",{style:{color:"#F07178"}},")"),e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"        "),e("span",{style:{color:"#82AAFF"}},"alert"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#A6ACCD"}},"JSON"),e("span",{style:{color:"#89DDFF"}},"."),e("span",{style:{color:"#82AAFF"}},"stringify"),e("span",{style:{color:"#F07178"}},"("),e("span",{style:{color:"#A6ACCD"}},"tab"),e("span",{style:{color:"#F07178"}},"))")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"      "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"    "),e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F07178"}},"  "),e("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"script"),e("span",{style:{color:"#89DDFF"}},">")])])])],-1),f=m('<h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>name</th><th style="text-align:center;">des</th><th style="text-align:center;">callback</th></tr></thead><tbody><tr><td>tab-click</td><td style="text-align:center;">tab点击事件</td><td style="text-align:center;">当前tab实例</td></tr></tbody></table>',2);function k(o,a,n,c,d,l){const r=i("render-demo-0"),t=i("demo");return C(),h("div",null,[_,p(t,{customClass:"undefined",sourceCode:`  <template>
      <l-tabs @tab-click='handleClick'></l-tabs>
  </template>
  <script>
  export default{
    methods:{
      handleClick(tab){
        alert(JSON.stringify(tab))
      }
    }
  };
  <\/script>

`},{highlight:F(()=>[A]),default:F(()=>[p(r)]),_:1}),f])}const g=D(b,[["render",k]]);export{B as __pageData,g as default};
