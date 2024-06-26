// plugins/highlight.ts
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from '@highlightjs/vue-plugin';

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage('javascript', javascript);

  nuxtApp.vueApp.use(hljsVuePlugin, {
    hljs
  });
});
