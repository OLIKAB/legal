import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en',
  title: 'OLIKAB Legal',
  description: 'Terms of Service and Privacy Policies for apps and games by OLIKAB.',
  cleanUrls: true,
  lastUpdated: true,
  // Templates in _mal/ are not published
  srcExclude: ['_mal/**', 'README.md'],
  themeConfig: {
    nav: [{ text: 'olikab.com', link: 'https://olikab.com' }],
    footer: {
      message: 'OLIKAB ENK, Norway',
      copyright: 'Contact: olikab.post@gmail.com'
    }
  }
})
