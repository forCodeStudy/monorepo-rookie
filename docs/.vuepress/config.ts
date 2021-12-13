import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Hello VuePress',
      description: 'Just playing around',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'VuePress 驱动的静态网站生成器',
    }
  },
  
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'forCodeStudy/monorepo-rookie',
    locales: {
      '/': {
        selectLanguageName: 'English',
        editLinkText: 'Edit this page on Github'
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        editLinkText: "在github上编辑",
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      }
    }
  },
})