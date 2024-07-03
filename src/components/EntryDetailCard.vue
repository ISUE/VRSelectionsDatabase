<script setup lang="ts">
import { defineProps } from "vue";
import type { Entry } from "~/types";

defineProps<{
  entry: Entry;
}>();

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

<template>
  <v-card width="700">
    <v-card-title>Entry Details</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="4">
          <v-card :href="entry.videoUrl" target="_blank">
            <template #default>
              <v-img :src="getThumbnailUrl(entry.videoUrl)" />
            </template>
          </v-card>
        </v-col>
        <v-col cols="8">
          <p>
            <strong>Application:</strong> {{ entry.application }} <br />
            <strong>Description:</strong> {{ entry.description }} <br />
            <strong>Dimensions:</strong> {{ entry.dimensions }} <br />
            <strong>Reference Frame:</strong> {{ entry.referenceFrame }} <br />
            <strong>Proximity:</strong> {{ entry.proximity }} <br />
            <strong>Target Type:</strong> {{ entry.targetType }} <br />
            <strong>Interactor:</strong> {{ entry.interactor }} <br />
            <strong>Indication:</strong> {{ entry.indication }} <br />
            <strong>Indication Feedback:</strong> {{ entry.indicationFeedback }}
            <br />
            <strong>Confirmation:</strong> {{ entry.confirmation }} <br />
            <strong>Outcome:</strong> {{ entry.outcome }} <br />
            <strong>Platforms:</strong>
            <img
              v-if="entry.quest === true"
              src="../assets/icons/quest.svg"
              alt="Quest"
              class="platform-icon"
            />
            <img
              v-if="entry.steam === true"
              src="../assets/icons/steam.svg"
              alt="Steam"
              class="platform-icon"
            />
            <img
              v-if="entry.psvr === true"
              src="../assets/icons/psvr.svg"
              alt="PSVR"
              class="platform-icon"
            />
            <br />
            <strong>Release Date:</strong> {{ entry.releaseDate }} <br />
            <strong>Application Type:</strong> {{ entry.appType }} <br />
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.platform-icon {
  height: 1.5em;
  vertical-align: middle;
}
</style>
