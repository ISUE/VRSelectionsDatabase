<template>
  <v-card-text>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-btn icon variant="plain" :href="pdfLink" target="_blank">
          <v-icon size="40">mdi-file-pdf-box</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn icon variant="plain" :href="sourceCodeLink" target="_blank">
          <v-icon size="40">mdi-github</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn icon variant="plain" :href="labPageLink" target="_blank">
          <v-icon size="40">mdi-flask</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn icon variant="plain" :href="doiLink" target="_blank">
          <v-icon size="40">
            <img src="/assets/icons/doi.svg" style="width: 40px; height: 40px" alt="DOI" />
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script setup>

// Props to receive data from the parent component
const props = defineProps({
  pdfLink: String,
  sourceCodeLink: String,
  labPageLink: String,
  doiLink: String,
});
</script>
