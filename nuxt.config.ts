export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  compatibilityDate: '2024-07-02',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/scss/_variables.scss" as *;'
        }
      }
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      deployURL: process.env.DEPLOY_URL,
    }
  },
  modules: ['@nuxt/image']
})