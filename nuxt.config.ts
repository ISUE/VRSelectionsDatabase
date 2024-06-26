// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  srcDir: "src/",
  css: [
    "@mdi/font/css/materialdesignicons.css",
    "vuetify/styles",
    "highlight.js/styles/stackoverflow-light.css",
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'VR Selections Interactive Visualizer',
      meta: [
        {
          name: "description",
          content:
            "Explore different selection techniques in consumer VR applications!",
        },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: process.env.BASE_URL },
        {
          property: "og:title",
          content: "VR Selections Interactive Visualizer",
        },
        {
          property: "og:description",
          content:
            "Explore different selection techniques in consumer VR applications!",
        },
        { property: "og:image", content: "${process.env.BASE_URL}/preview.png" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "45.56.116.241" },
        { property: "twitter:url", content: process.env.BASE_URL },
        {
          name: "twitter:title",
          content: "VR Selections Interactive Visualizer",
        },
        {
          name: "twitter:description",
          content:
            "Explore different selection techniques in consumer VR applications!",
        },
        { name: "twitter:image", content: "${process.env.BASE_URL}/preview.png" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
        },
        {
          type: "image/x-icon",
          href: "/logo.ico",
          rel: "icon",
        },
      ],
    },
  },
  build: {
    transpile: ["vuetify", "@mdi/font", "@highlightjs/vue-plugin"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear();
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  plugins: ["~/plugins/highlight.ts"],
});