import { defineConfig } from 'dumi';

const year = new Date().getFullYear();

export default defineConfig({
  themeConfig: {
    name: '豆子',
    footer: `Copyright © ${year} | Powered by 豆子`,
    logo: 'https://github.githubassets.com/favicons/favicon.png',
    nav: [
      {
        title: 'Python',
        link: '/python',
      },
    ],
  },
  favicons: ['https://github.githubassets.com/favicons/favicon.png'],
});
