<template>
  <v-app>
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
};
</script>