<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-img width="100%" src="@/assets/logo.ico" />
      </v-col>
      <v-col cols="11">
        <h1>
          Interactive Visualizer for Object Selection Techniques in Consumer VR
          Applications
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>What is this?</v-card-title>
          <v-card-text>
            <ul class="ml-12">
              <li v-for="item in whatIsThisItems" :key="item">{{ item }}</li>
            </ul>
            <p class="ml-4 mt-2">
              <i> This webpage was made for data visualization purposes. </i>
            </p>
          </v-card-text>
        </v-card>
        <v-card class="mt-2">
          <v-card-title>Note</v-card-title>
          <v-card-text class="ml-4">
            Entries with * and ** indicate that the Interactor and Indication or
            Confirmation values have two variations. For Interactor and
            Indication, direct grab with virtual hand and pointing with a
            visible or an invisible ray are active depending on the distance
            from the target. For Confirmation, Analog - Continued Press is
            combined with Dwell. For these instances, we used the same video
            timestamp and differentiate between them with the * and **.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <template v-slot:default>
            <v-img src="@/assets/webscreen.png" />
          </template>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon icon="mdi-filter" />
            Filters
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-title>Dimensions</v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    chips
                    multiple
                    clearable
                    variant="outlined"
                    density="compact"
                    placeholder="Any"
                    :items="dimensions"
                    v-model="selectedDimensions"
                  />
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Reference Frame</v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    chips
                    multiple
                    clearable
                    variant="outlined"
                    density="compact"
                    placeholder="Any"
                    :items="referenceFrames"
                    v-model="selectedReferenceFrames"
                  />
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Proximity</v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    chips
                    multiple
                    clearable
                    variant="outlined"
                    density="compact"
                    placeholder="Any"
                    :items="proximities"
                    v-model="selectedProximities"
                  />
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Target Type</v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    chips
                    multiple
                    clearable
                    variant="outlined"
                    density="compact"
                    placeholder="Any"
                    :items="targetTypes"
                    v-model="selectedTargetTypes"
                  />
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Interactor</v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    chips
                    multiple
                    clearable
                    variant="outlined"
                    density="compact"
                    placeholder="Any"
                    :items="interactors"
                    v-model="selectedInteractors"
                  />
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Indication</v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    chips
                    multiple
                    clearable
                    variant="outlined"
                    density="compact"
                    placeholder="Any"
                    :items="indications"
                    v-model="selectedIndications"
                  />
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Confirmation</v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    chips
                    multiple
                    clearable
                    variant="outlined"
                    density="compact"
                    placeholder="Any"
                    :items="confirmations"
                    v-model="selectedConfirmations"
                  />
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Outcome</v-list-item-title>
                <v-list-item-subtitle>
                  <v-select
                    chips
                    multiple
                    clearable
                    variant="outlined"
                    density="compact"
                    placeholder="Any"
                    :items="outcomes"
                    v-model="selectedOutcomes"
                  />
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon icon="mdi-database" />
            Database Entries
            <v-spacer />
            <v-text-field
              v-model="search"
              density="compact"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="solo-filled"
              flat
              hide-details
              single-line
              clearable
            />
          </v-card-title>
          <v-card-text>
            <v-data-table-virtual
              :headers="headers"
              :items="filteredData"
              v-model:search="debouncedSearch"
            >
              <template v-slot:item.videoUrl="{ item }">
                <v-card :href="item.videoUrl" target="_blank">
                  <template #default>
                    <v-img :src="getThumbnailUrl(item.videoUrl)" />
                  </template>
                </v-card>
              </template>
            </v-data-table-virtual>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import csvData from "@/assets/data_website.csv";
import { computed, ref } from "vue";
import { useDebounce } from "@vueuse/core";

interface Entry {
  videoUrl: string;
  application: string;
  description: string;
  dimensions: string;
  referenceFrame: string;
  proximity: string;
  targetType: string;
  interactor: string;
  indication: string;
  indicationFeedback: string;
  confirmation: string;
  outcome: string;
}

const data = ref(csvData as Entry[]);
const search = ref("");
const debouncedSearch = useDebounce(search, 300);

const whatIsThisItems = [
  "A dataset of scenarios where VR selections occur",
  "Context attributes (features) in VR object selection scenarios were collected",
];

const headers = [
  { title: "Video", key: "videoUrl", sortable: false, filterable: false },
  {
    title: "Application",
    key: "application",
    sortable: false,
    width: "200px",
    filterable: false,
  },
  {
    title: "Description",
    key: "description",
    sortable: false,
    filterable: false,
  },
  { title: "Dimensions", key: "dimensions", sortable: false },
  { title: "Reference Frame", key: "referenceFrame", sortable: false },
  { title: "Proximity", key: "proximity", sortable: false },
  { title: "Target Type", key: "targetType", sortable: false },
  { title: "Interactor", key: "interactor", sortable: false },
  { title: "Indication", key: "indication", sortable: false },
  { title: "Indication Feedback", key: "indicationFeedback", sortable: false },
  { title: "Confirmation", key: "confirmation", sortable: false },
  { title: "Outcome", key: "outcome", sortable: false },
];

const dimensions = [...new Set(data.value.map((entry) => entry.dimensions))];
const selectedDimensions = ref([] as string[]);

const referenceFrames = [
  ...new Set(data.value.map((entry) => entry.referenceFrame)),
];
const selectedReferenceFrames = ref([] as string[]);

const proximities = [...new Set(data.value.map((entry) => entry.proximity))];
const selectedProximities = ref([] as string[]);

const targetTypes = [...new Set(data.value.map((entry) => entry.targetType))];
const selectedTargetTypes = ref([] as string[]);

const interactors = [...new Set(data.value.map((entry) => entry.interactor))];
const selectedInteractors = ref([] as string[]);

const indications = [...new Set(data.value.map((entry) => entry.indication))];
const selectedIndications = ref([] as string[]);

const confirmations = [
  ...new Set(data.value.map((entry) => entry.confirmation)),
];
const selectedConfirmations = ref([] as string[]);

const outcomes = [...new Set(data.value.map((entry) => entry.outcome))];
const selectedOutcomes = ref([] as string[]);

const filteredData = computed(() => {
  return data.value.filter((entry) => {
    if (
      selectedDimensions.value.length > 0 &&
      !selectedDimensions.value.includes(entry.dimensions)
    ) {
      return false;
    }
    if (
      selectedReferenceFrames.value.length > 0 &&
      !selectedReferenceFrames.value.includes(entry.referenceFrame)
    ) {
      return false;
    }
    if (
      selectedProximities.value.length > 0 &&
      !selectedProximities.value.includes(entry.proximity)
    ) {
      return false;
    }
    if (
      selectedTargetTypes.value.length > 0 &&
      !selectedTargetTypes.value.includes(entry.targetType)
    ) {
      return false;
    }
    if (
      selectedInteractors.value.length > 0 &&
      !selectedInteractors.value.includes(entry.interactor)
    ) {
      return false;
    }
    if (
      selectedIndications.value.length > 0 &&
      !selectedIndications.value.includes(entry.indication)
    ) {
      return false;
    }
    if (
      selectedConfirmations.value.length > 0 &&
      !selectedConfirmations.value.includes(entry.confirmation)
    ) {
      return false;
    }
    if (
      selectedOutcomes.value.length > 0 &&
      !selectedOutcomes.value.includes(entry.outcome)
    ) {
      return false;
    }
    return true;
  });
});

const getThumbnailUrl = (url: string) => {
  try {
    const videoId = url
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/|\/live\/)/)[2]
      .split(/[^0-9a-z_\-]/i)[0];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  } catch (error) {
    console.error(`Failed to generate a YouTube thumbnail for URL '${url}'`);
    return "/open-in-new.svg";
  }
};
</script>
