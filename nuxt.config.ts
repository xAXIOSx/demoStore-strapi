// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi", "@nuxtjs/apollo"],
  runtimeConfig: {
    public: {
      strapi: {
        url: "http://localhost:1337", // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable
      },
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:1337/graphql",
      },
    },
  },
  css: ["~/assets/styles/index.scss"],
});
