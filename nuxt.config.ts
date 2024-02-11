// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/prismic',
    '@nuxt/image'
  ],
  

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Maxime Legrand - Portfolio',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Découvrez le portfolio de Maxime LEGRAND, un créatif développeur web passionné par la création d'expériences visuelles mémorables et de solutions numériques innovantes. Explorez une sélection variée de mes meilleurs travaux, reflétant mon expertise en conception UX/UI, développement front-end, ... Basé à Montbéliard, je suis prêt à transformer vos idées en réalités visuelles captivantes." },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  prismic: {
    endpoint: "portfolio-bessarion"
  },

  image: {
    prismic: {},
    quality: 10,
  },
})