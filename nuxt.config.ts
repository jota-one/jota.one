// https://nuxt.com/docs/guide/directory-structure/nuxt.config#nuxt-config-file
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900)'
        }
      ]
    }
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    documentDriven: true
  },
  vite: {
    plugins: [
      webfontDownload([
        'https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900)',
      ])
    ]
  }
})
