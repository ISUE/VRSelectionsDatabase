// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const ucf_lab = "https://www.eecs.ucf.edu/isuelab/";
const project = "research/vr_selections/";
const project_page = ucf_lab + project;

export default defineNuxtConfig({
  srcDir: "src/",
  css: [
    "@/assets/styles/main.css",
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
        { property: "og:url", content: project_page },
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
          content: `${project_page}/preview.png`,
        },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: ucf_lab },
        { property: "twitter:url", content: project_page },
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
          content: `${project_page}/preview.png`,
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/isuelab/research/vr_selections/logo.ico",
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
    "nuxt-gtag",
  ],

  gtag: {
    id: "G-Z88C79SNWQ",
  },

  plugins: ["~/plugins/highlight.ts", "~/plugins/gtag.ts"],
});
