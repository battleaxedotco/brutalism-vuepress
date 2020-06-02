module.exports = {
  title: `Brutalism`,
  description: "Component library by Battleaxe",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  plugins: [],
  port: 6660,
  markdown: {
    extractHeaders: ["h2"],
  },
  themeConfig: {
    lastUpdated: false,
    sidebar: [
      ["/", "Home"],
      "/docs/Anno/",
      "/docs/Button/",
      "/docs/Button-Group/",
      "/docs/Divider/",
      "/docs/Dropdown/",
      "/docs/Dropzone/",
      "/docs/File-Input/",
      "/docs/Fold/",
      "/docs/Footer/",
      "/docs/Grid/",
      "/docs/Icon/",
      "/docs/Input/",
      "/docs/Input-Scroll/",
      "/docs/Menus/",
      "/docs/Panel/",
      "/docs/Panelify/",
      "/docs/Row/",
      "/docs/Tabs/",
      "/docs/TextArea/",
      "/docs/Toggle/",
      "/docs/Wrapper/",
    ],
    nav: [{ text: "Home", link: "/" }],
    // repo: "colwilson/vuepress-examples",
    // repoLabel: "Contribute an Example !",
    displayAllHeaders: true,
  },
  extendMarkdown(md) {
    lineNumbers: true;
  },
  configureWebpack: {
    // module: {
    //   rules: [
    //     { test: /\.md$/, use: './loader' }
    //   ]
    // }
  },
};
