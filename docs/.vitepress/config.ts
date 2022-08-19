const sidebar = [
  {
    text: "介绍",
    items: [
      { text: "安装", link: "/guide/installation" },
      { text: "快速开始", link: "/guide/quickstart" }
    ],
  },
  {
    text: "介绍2",
    items: [
      { text: "安装", link: "/guide/installation" },
      { text: "快速开始", link: "/guide/quickstart" }
    ],
  },
];
const config = {
  // 站点名称
  title: "基于element-plus二次封装组件",
  description: "A VitePress site",
  ignoreDeadLinks: true, // 最好加上，构建时会忽略md中的外链
  lastUpdatedText: "更新时间",
  lastUpdated: true, //显示最近更新时间
  siteTitle: "vue-template",

  themeConfig: {
    outlineTitle: "目录",
    sidebar,
    nav: [
      //右侧导航
      { text: "首页", link: "/" },
      { text: "项目简介", link: "/guide/installation" },
      {
        text: "更新日志",
        link: "/CHANGELOG.md",
      },
    ],
    socialLinks: [
      //右上角图标和链接，icon 可用svg 配置
      {
        icon: "github",
        link: "https://github.com/Yinzhuo19970516/vue-template",
      },
      { icon: "slack", link: "https://juejin.cn/user/1011206428301774" },
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
