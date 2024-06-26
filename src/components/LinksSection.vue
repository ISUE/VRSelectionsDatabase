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
            <img
              src="assets/icons/doi.svg"
              style="width: 40px; height: 40px"
              alt="DOI"
            />
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script setup>
const pdfLink = "vrfox.png";
const sourceCodeLink = "https://github.com/ISUE/vr_selections";
const labPageLink = "https://www.eecs.ucf.edu/isuelab/";
const doiLink = "https://doi.org";
</script>
