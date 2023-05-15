
const sidebar = [
  {
    text: "图标集合", link:"https://lifelineicon.pages.dev/" 
  },
  {
    text: "组件集合",
    items: [
      { text: "LButton 按钮", link: "/examples/l-button" },
      { text: "LTabs 标签页", link: "/examples/l-tabs" },
      { text: "LCommonWrap 通用容器", link: "/examples/l-common-wrap" },
    ],
  }
];
const config = {
  // 站点名称
  title: "lifeline-ui",
  description: "A VitePress site",
  ignoreDeadLinks: true, // 最好加上，构建时会忽略md中的外链
  lastUpdatedText: "更新时间",
  lastUpdated: true, //显示最近更新时间
  siteTitle: "lifeline-ui",
  head: [
    ['link', { rel:'stylesheet', href: `//at.alicdn.com/t/c/font_3187951_bxx1dr0r34w.css` }]
  ],
  themeConfig: {
    outlineTitle: "目录",
    sidebar,
    nav: [
      //右侧导航
      { text: "首页", link: "/" },
      { text: "安装", link: "/guide/installation" },
      {
        text: "更新日志",
        link: "/guide/CHANGELOG.md",
      },
    ],
    socialLinks: [
      //右上角图标和链接，icon 可用svg 配置
      {
        icon: "github",
        link: "https://github.com/lingjinming/lifeline-ui-vite",
      },
      // { icon: "slack", link: "https://juejin.cn/user/1011206428301774" },
    ],
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽

      const { demoBlockPlugin } = require("vitepress-theme-demoblock");

      md.use(demoBlockPlugin);
    },
  },
};
export default config;
