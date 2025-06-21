import { defineConfig } from 'dumi';

const year = new Date().getFullYear();

export default defineConfig({
  base: '/blog/',
  publicPath: '/blog/',          // 资源相对路径
  themeConfig: {
    name: '豆子',
    footer: `Copyright © ${year} | Powered by 豆子`,
    logo: 'https://github.githubassets.com/favicons/favicon.png',
    // lastUpdated: true, // 启用最后更新时间 默认启动
    nav: [
      {
        title: 'github',
        link: '/github/github-pages',
      },
    ],
  },
  favicons: ['https://github.githubassets.com/favicons/favicon.png'],
});
