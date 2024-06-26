// Import the csvParse function from d3-dsv
import { csvParse } from 'd3-dsv';
import type { Entry } from "~/types";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("loadCsv", async () => {
    const csvFile = "data_website.csv";

    // Fetch CSV file
    const response = await fetch(csvFile);
    const csvData = await response.text();

    // Parse CSV data using d3.csvParse
    const parsedData = csvParse(csvData, (d) => {
      // Transform each row during parsing
      const record: Entry = {
        videoUrl: d.videoUrl.trim(),
        application: d.application.trim(),
        description: d.description.trim(),
        dimensions: d.dimensions.trim(),
        referenceFrame: d.referenceFrame.trim(),
        proximity: d.proximity.trim(),
        targetType: d.targetType.trim(),
        interactor: d.interactor.trim(),
        indication: d.indication.trim(),
        indicationFeedback: d.indicationFeedback.trim(),
        confirmation: d.confirmation.trim(),
        outcome: d.outcome.trim(),
        quest: d.quest === 'true',
        steam: d.steam === 'true',
        psvr: d.psvr === 'true',
        releaseDate: d.releaseDate.trim(),
        appType: d.appType.trim()
      };
      return record;
    });

    // Resolve with parsed data
    return parsedData;
  });
});
