// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const ucf = "https://www.eecs.ucf.edu";
const lab = "/isuelab/research/vr_selections/";
const ucf_lab = ucf + lab;

export default defineNuxtConfig({
  srcDir: "src/",
  css: [
    "@mdi/font/css/materialdesignicons.css",
    "vuetify/styles",
    "highlight.js/styles/stackoverflow-light.css",
  ],
  app: {
    baseURL: "/isuelab/research/vr_selections/",
    buildAssetsDir: "/isuelab/research/vr_selections/_nuxt/",
    cdnURL: "/isuelab/research/vr_selections/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "VR Selections Interactive Visualizer",
      meta: [
        {
          name: "description",
          content:
            "Explore different selection techniques in consumer VR applications!",
        },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: ucf_lab },
        {
          property: "og:title",
          content: "VR Selections Interactive Visualizer",
        },
        {
          property: "og:description",
          content:
            "Explore different selection techniques in consumer VR applications!",
        },
        {
          property: "og:image",
          content: `${ucf_lab}/preview.png`,
        },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: ucf },
        { property: "twitter:url", content: ucf_lab },
        {
          name: "twitter:title",
          content: "VR Selections Interactive Visualizer",
        },
        {
          name: "twitter:description",
          content:
            "Explore different selection techniques in consumer VR applications!",
        },
        {
          name: "twitter:image",
          content: `${ucf_lab}/preview.png`,
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${lab}logo.ico`,
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
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  plugins: ["~/plugins/highlight.ts"],
});
