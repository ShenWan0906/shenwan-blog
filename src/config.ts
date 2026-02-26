import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "项目经理的浮生绘记",
  subtitle: "Demo Site",
  lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
  themeColor: {
    hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false, // Display the credit text of the banner image
      text: "", // Credit text to be displayed
      url: "", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.Dashboard,
    {
      name: "作品集", // 菜单显示的名称
      url: "/projects/", // 对应的页面路径
    },
    {
      name: "实验室", // 菜单显示的名称
      url: "/lab/", // 对应的页面路径
    },
    {
      name: "美食日记",
      url: "/food/",
    },
    {
      name: "光影浮生",
      url: "http://shenwan.life/gallery/",
      external: true, 
    },
    {
      name: "生活碎片",
      url: "/red/",
    },
    {
      name: "加入我们",
      url: "/join/",
    },
    LinkPreset.About,
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "西瓜",
  bio: "项目经理 | 独立开发者 | 个人博主",
  links: [
    {
      name: "github",
      icon: "fa6-brands:github",
      url: "https://shenwan0906.github.io/MyBlog/",
    },
    {
      name: "zhihu",
      icon: "fa6-brands:zhihu",
      url: "https://www.zhihu.com/people/xi-xiu-qiang-wei-91-91",
    },
    {
      name: "CSDN",
      icon: "fa6-solid:terminal",
      url: "https://blog.csdn.net/qq_41055565",
    },
    {
      name: "juejin",
      icon: "simple-icons:juejin",
      url: "https://juejin.cn/user/3122268756257768",
    },
    {
      name: "bilibili",
      icon: "fa6-brands:bilibili",
      url: "https://space.bilibili.com/126110059",
    },
    {
      name: "qq",
      icon: "fa6-brands:qq",
      url: "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1127763116&website=www.oicqzone.com",
    },
    {
      name: "envelope",
      icon: "fa6-solid:envelope",
      url: "mailto:1127763116@qq.com",
    },
    {
      name: "weibo",
      icon: "fa6-brands:weibo",
      url: "https://weibo.com/u/2805980813",
    },
    {
      name: "wangyiyun",
      icon: "fa6-solid:music",
      url: "https://music.163.com/#/user/home?id=353054481",
    },
    {
      name: "steam",
      icon: "fa6-brands:steam",
      url: "https://store.steampowered.com/search/?developer=ShenWan0906",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
  // Please select a dark theme, as this blog theme currently only supports dark background color
  theme: "github-dark",
};
