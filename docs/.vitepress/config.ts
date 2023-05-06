
const sidebar = [
  {
    text: "组件集合",
    items: [
      { text: "图标集合", link:"https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.22&manage_type=myprojects&projectId=3187951&keyword=&project_type=&page=" },
      { text: "LButton", link: "/examples/LButton" },
      { text: "LTabs", link: "/examples/LTabs" },
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
