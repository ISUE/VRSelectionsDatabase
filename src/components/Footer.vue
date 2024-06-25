<template>
  <v-footer class="footer" padless>
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <span>© ISUE Lab, 2024</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #000; /* Dark blue color */
  height: 40px; /* Thinner footer */
  color: white; /* Text color */
}
</style>
