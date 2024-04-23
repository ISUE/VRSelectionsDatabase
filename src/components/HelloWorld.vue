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
      <v-col>
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
              v-model:search="search"
            >
              <template v-slot:item.videoUrl="{ item }">
                <v-card :href="item.videoUrl" target="_blank">
                  <template #default>
                    <v-img :src="getThumbnailUrl(item.videoUrl)" />
                  </template>
                </v-card>
              </template>

              <!--              PER-COLUMN FILTER ATTEMPT-->
              <!--              <template v-slot:header.application="{ column }">-->
              <!--                {{ column.title }}-->
              <!--                <v-autocomplete-->
              <!--                  v-model="selectedApplications"-->
              <!--                  :items="applications"-->
              <!--                  density="compact"-->
              <!--                  variant="solo-filled"-->
              <!--                  flat-->
              <!--                  hide-details-->
              <!--                  single-line-->
              <!--                  multiple-->
              <!--                  auto-select-first-->
              <!--                >-->
              <!--                  <template v-slot:selection="{ item, index }">-->
              <!--                    <v-chip v-if="index === 1">-->
              <!--                      {{ selectedApplications.length }}-->
              <!--                    </v-chip>-->
              <!--                  </template>-->
              <!--                </v-autocomplete>-->
              <!--              </template>-->
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

const filterFunctions: Record<
  string,
  (
    value: string,
    query: string,
    item?: any,
  ) => boolean | number | [number, number] | [number, number][]
> = {
  application: (value, query, item) => {
    console.log("Value:", value);
    console.log("Query:", query);
    console.log("Item:", item);
    console.log("Returning:", value.includes(query));
    return value.includes(query);
  },
  // dimensions: (value, query) => value.includes(query),
  // referenceFrame: (value, query) => value.includes(query),
  // proximity: (value, query) => value.includes(query),
  // targetType: (value, query) => value.includes(query),
  // interactor: (value, query) => value.includes(query),
  // indication: (value, query) => value.includes(query),
  // indicationFeedback: (value, query) => value.includes(query),
  // confirmation: (value, query) => value.includes(query),
  // outcome: (value, query) => value.includes(query),
};

const filterFunction = (
  value: string,
  query: string,
  item?: any,
): boolean | number | [number, number] | [number, number][] => {
  console.log("Value:", value);
  console.log("Query:", query);
  console.log("Item:", item);
  return [];
};

const applications = [...new Set(data.value.map((entry) => entry.application))];
const selectedApplications = ref([] as string[]);

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

const indicationFeedbacks = [
  ...new Set(data.value.map((entry) => entry.indicationFeedback)),
];
const selectedIndicationFeedbacks = ref([] as string[]);

const confirmations = [
  ...new Set(data.value.map((entry) => entry.confirmation)),
];
const selectedConfirmations = ref([] as string[]);

const outcomes = [...new Set(data.value.map((entry) => entry.outcome))];
const selectedOutcomes = ref([] as string[]);

const filteredData = computed(() => {
  let result = data.value;
  if (selectedApplications.value.length > 0) {
    result = result.filter((entry) =>
      selectedApplications.value.includes(entry.application),
    );
  }
  if (selectedDimensions.value.length > 0) {
    result = result.filter((entry) =>
      selectedDimensions.value.includes(entry.dimensions),
    );
  }
  if (selectedReferenceFrames.value.length > 0) {
    result = result.filter((entry) =>
      selectedReferenceFrames.value.includes(entry.referenceFrame),
    );
  }
  if (selectedProximities.value.length > 0) {
    result = result.filter((entry) =>
      selectedProximities.value.includes(entry.proximity),
    );
  }
  if (selectedTargetTypes.value.length > 0) {
    result = result.filter((entry) =>
      selectedTargetTypes.value.includes(entry.targetType),
    );
  }
  if (selectedInteractors.value.length > 0) {
    result = result.filter((entry) =>
      selectedInteractors.value.includes(entry.interactor),
    );
  }
  if (selectedIndications.value.length > 0) {
    result = result.filter((entry) =>
      selectedIndications.value.includes(entry.indication),
    );
  }
  if (selectedIndicationFeedbacks.value.length > 0) {
    result = result.filter((entry) =>
      selectedIndicationFeedbacks.value.includes(entry.indicationFeedback),
    );
  }
  if (selectedConfirmations.value.length > 0) {
    result = result.filter((entry) =>
      selectedConfirmations.value.includes(entry.confirmation),
    );
  }
  if (selectedOutcomes.value.length > 0) {
    result = result.filter((entry) =>
      selectedOutcomes.value.includes(entry.outcome),
    );
  }
  return result;
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
