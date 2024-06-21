<template>
  <v-container>
    <v-row align="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-row align="center" no-gutters>
            <v-col cols="auto">
              <v-img
                width="50px"
                src="@/assets/vrfox.png"
                @load="checkImagesLoaded"
              />
            </v-col>
            <v-col>
              <v-card-title class="large-text">Home</v-card-title>
            </v-col>
          </v-row>
        </router-link>
      </v-col>
      <v-col>
        <h1>
          Interactive Visualizer for Object Selection Techniques in Consumer VR
          Applications
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mt-2">
          <v-card-title>What is this?</v-card-title>
          <v-card-text>
            <ul class="ml-12">
              <li>
                A database of VR scenarios where selections occur in consumer VR
                applications. Its intention is to connect the research
                literature on VR selection methodology with practical
                implementations.
              </li>
              <li>
                Context attributes (features) in VR selection scenarios were
                collected and organized into the 'Where' (Reference Frame and
                Target Type) and 'How' (Indication and Confirmation stages,
                Interactor, Outcome) taxonomies (image on the right).
              </li>
              <li>
                <div>
                  This database is open-access,
                  <router-link to="/contributions"
                    >open to contributions</router-link
                  >, and will be updated with new games and newly identified
                  methods for selections in consumer VR applications. If you
                  find it useful in your work, please consider
                  <router-link to="/contributions">citing</router-link> it.
                </div>
              </li>
            </ul>
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

      <v-col cols="12" md="6">
        <v-card class="mt-2">
          <template v-slot:default>
            <v-img src="@/assets/webscreen.png" @load="checkImagesLoaded" />
          </template>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
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
      <v-col cols="9">
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
              v-if="imagesLoaded"
              :headers="headers"
              :items="filteredData"
              v-model:search="debouncedSearch"
            >
              <template v-slot:item.action="{ item }">
                <v-btn
                  variant="plain"
                  icon="mdi-information-outline"
                  @click="openEntryDetailCard(item)"
                />
              </template>
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

  <v-dialog v-model="showEntryDetailCard" width="auto">
    <EntryDetailCard :entry="selectedEntry" />
  </v-dialog>
</template>

<script setup lang="ts">
import csvData from "@/assets/data_website.csv";
import { computed, ref } from "vue";
import { useDebounce } from "@vueuse/core";
import { Entry } from "@/types/entry";

const data = ref(csvData as Entry[]);
const search = ref("");
const debouncedSearch = useDebounce(search, 300);

const showEntryDetailCard = ref(false);
const selectedEntry = ref({} as Entry);

const openEntryDetailCard = (entry: Entry) => {
  selectedEntry.value = entry;
  showEntryDetailCard.value = true;
};

const headers = [
  { title: "", key: "action", sortable: false, filterable: false },
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

// New variables and methods for tracking image loading state
const imagesLoaded = ref(false);
const imageLoadCount = ref(0);

const checkImagesLoaded = () => {
  imageLoadCount.value++;
  if (imageLoadCount.value === 2) {
    // Update this count based on the total number of images
    imagesLoaded.value = true;
  }
};
</script>

<style scoped>
.large-text {
  font-size: 36px; /* Adjust the size as needed */
  letter-spacing: normal; /* Adjust the spacing as needed */
}
</style>
