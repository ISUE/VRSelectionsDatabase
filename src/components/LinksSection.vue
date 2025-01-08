<template>
  <v-card-text class="py-1 mb-2">
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-btn icon variant="plain" :href="pdfLink" target="_blank">
          <v-icon size="40">mdi-file-pdf-box</v-icon>
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
    </v-row>
  </v-card-text>
</template>

<script setup>
const pdfLink =
  "https://www.eecs.ucf.edu/isuelab/publications/pubs/MaslychISMAR2024.pdf";
const sourceCodeLink = "https://github.com/ISUE/VRSelectionsDatabase";
const labPageLink = "https://www.eecs.ucf.edu/isuelab/";
const doiLink = "https://doi.org/10.1109/ISMAR62088.2024.00115";
</script>
