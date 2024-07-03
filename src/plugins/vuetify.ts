// plugins/vuetify.ts
import "@mdi/font/css/materialdesignicons.css"; // Ensure the icon library is imported

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myTheme",
      themes: {
        myTheme: {
          variables: {
            fontFamilyBase: "Roboto, sans-serif",
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
