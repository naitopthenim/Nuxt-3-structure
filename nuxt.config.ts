// import { defineNuxtConfig } from 'nuxt';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  // @ts-ignore
  typescript: {
    shim: false,
    strict: false,
  },

  app: {
    head: {
      titleTemplate: '%s - Nuxt 3',
      title: 'Home',
      script: [
        {
          src: `/scripts/marker-config.js`,
        },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  // components: [{ path: '~/components', pathPrefix: false }],

  modules: ['@nuxtjs/tailwindcss'],

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-hexrgba': {},
      'postcss-import': {},
    },
  },

  build: {
    transpile: ['primevue'],
    // babel: {
    //   plugins: ['@babel/plugin-proposal-optional-chaining'],
    // },
  },

  // webpack: {
  //   postcss: {
  //     postcssOptions: {
  //       plugins: {
  //         'postcss-nested': {},
  //         'postcss-hexrgba': {},
  //         'postcss-import': {},
  //       },
  //     },
  //   },
  // },

  vite: {
    // fixed issue ws: https://github.com/nuxt/framework/issues/1796#issuecomment-965577597
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
    plugins: [
      Components({
        resolvers: [
          PrimeVueResolver({
            // prefix for components (e.g. 'P' to resolve Menu from PMenu)
            prefix: 'P',
          }),
        ],
      }),
    ],
  },

  // https://v3.nuxtjs.org/guide/features/runtime-config/
  runtimeConfig: {
    public: {
      // FIXME: enable SSR mode and hide google api key in secret config
      googleMapsApiKey: '', // can be overridden by NUXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
});
