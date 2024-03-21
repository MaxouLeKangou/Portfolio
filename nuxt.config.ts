// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/prismic',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],
  
  plugins: [
    { src: '~/plugins/gsap.js', mode: 'client' }
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
        { hid: 'description', name: 'description', content: "Discover the portfolio of Maxime LEGRAND, a creative web developer passionate about creating memorable visual experiences and innovative digital solutions. Explore a diverse selection of my best work, reflecting my expertise in UX/UI design, front-end development, ... Based in Montbéliard, I am ready to turn your ideas into captivating visual realities." },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'google-site-verification', content: 'RZ52c6zgVnWQtMRcxr5gWXfv-VC6C75Tyvchjcz40AY' },
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

  site: {
    url: 'https://portfolio.bessarion.fr',
  },
})