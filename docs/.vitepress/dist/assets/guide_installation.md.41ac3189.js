import{_ as s,o as a,c as l,O as n}from"./chunks/framework.159a48cb.js";const F=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/installation.md","filePath":"guide/installation.md","lastUpdated":1685601231000}'),e={name:"guide/installation.md"},o=n(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="环境支持" tabindex="-1">环境支持 <a class="header-anchor" href="#环境支持" aria-label="Permalink to &quot;环境支持&quot;">​</a></h2><p>由于 Vue 3 不再支持 IE11，lifeline-ui 也不再支持 IE11 浏览器; 项目中建议使用node版本14+; 脚手架工程中需node版本16+;</p><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><p>目前还在开发迭代中。</p><h2 id="选择一个你喜欢的包管理器" tabindex="-1">选择一个你喜欢的包管理器 <a class="header-anchor" href="#选择一个你喜欢的包管理器" aria-label="Permalink to &quot;选择一个你喜欢的包管理器&quot;">​</a></h2><p>建议您使用包管理器 (pnpm/npm/yarn) 安装 lifeline-ui, 然后您就可以配合打包工具，例如 Vite 和 webpack进行功能开发。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-a24u9" id="tab-upGDi0U" checked="checked"><label for="tab-upGDi0U">pnpm</label><input type="radio" name="group-a24u9" id="tab-AV6hptL"><label for="tab-AV6hptL">npm</label><input type="radio" name="group-a24u9" id="tab--PbaxD4"><label for="tab--PbaxD4">yarn</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ pnpm i lifeline</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ui</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ npm i lifeline</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ui </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ yarn add lifeline</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ui</span></span></code></pre></div></div></div><div class="danger custom-block"><p class="custom-block-title">由于组件库使用了iconfont，需要引入字体库线上地址可使用图标。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//at.alicdn.com/t/c/font_3187951_bxx1dr0r34w.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div><h3 id="项目中引入" tabindex="-1">项目中引入 <a class="header-anchor" href="#项目中引入" aria-label="Permalink to &quot;项目中引入&quot;">​</a></h3><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-pTBTD" id="tab-j19t_LQ" checked="checked"><label for="tab-j19t_LQ">vue-cli</label><input type="radio" name="group-pTBTD" id="tab-LAVOFGU"><label for="tab-LAVOFGU">vite</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> LifelineUI </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lifeline-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../node_modules/lifeline-ui/dist/index.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(LifelineUI)</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> LifelineUI </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lifeline-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../node_modules/lifeline-ui/dist/index.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">createApp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(LifelineUI)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></div></div>`,11),p=[o];function t(i,c,r,d,D,y){return a(),l("div",null,p)}const C=s(e,[["render",t]]);export{F as __pageData,C as default};