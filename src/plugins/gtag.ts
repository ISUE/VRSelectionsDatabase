export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", (page) => {
    if (window && window.gtag) {
      window.gtag("config", "G-Z88C79SNWQ", {
        page_path: page.fullPath,
        page_title: document.title,
      });
    }
  });
});
