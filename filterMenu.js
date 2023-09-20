var includeAllEntries = {
  "Flat UI": ["2D", "3D"],
  "Speed vs Accuracy": ["speed", "accuracy", "equal"],
  "Avg. num selectables in view": ["1-2", "3-9", "10-19", "20+"],
  "Max num selectables in view": ["1-2", "3-9", "10-19", "20+"],
  "Unique target": ["no", "yes"],
  "Selectable size": ["tiny", "small", "medium", "large"],
  "Target distance": ["Extrapersonal", "Peripersonal", "On-body"],
  "Static or moving target": ["static", "moving", "both"],
  "Arrangement": ["random", "grid", "list", "circular"],
  "Reference Frame": ["Environment", "Hand", "Head", "Torso"],
  "Direction": ["both", "center", "periphery"],
  "Occlusion": ["none", "minimal", "heavy"],
  "Selection Technique": ["Point", "Shoot", "Grasp", "Catch", "Touch", "Press Virtual Button", "Release-to-select", "Manipulate-to-select", "Throw", "Push", "Cross", "Hover", "Model"],
  "Hover feedback": ["no", "yes"],
  "Feedback immediacy": ["no", "yes"],
  "Locomotion allowed": ["no", "yes"],
}

var filterList = {}

function uncheckAllCheckboxes() {
  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  console.log("Count of checkboxes is " + checkboxes.length);
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  var collapsibles = document.querySelectorAll("[data-bs-toggle='collapse']");
  console.log("Count of collapsibles is " + collapsibles.length);

  checkboxStates();
}

function checkboxStates() {
  let checked = {};

  // Iterate over each parent container
  $('.row').each(function () {
    let key = $(this).find('button').text().trim().replace(/\s+/g, ' ');

    let checkedValues = []; // List to store checked labels

    // Iterate over checked checkboxes in the current container
    $(this).find('.form-check-input:checked').each(function () {
      // Get the corresponding label text and add to the list
      checkedValues.push($(this).siblings('label').text().trim());
    });

    if (checkedValues.length > 0) {
      checked[key] = checkedValues;
    }
  });
  console.log(checked);

  filterList = {};
  // Subtracts the checked values from the includeAllEntries values
  for (var key in includeAllEntries) {
    if (checked.hasOwnProperty(key)) {
      var checkedValues = checked[key];
      var includeAllValues = includeAllEntries[key];
      var uncheckedValues = includeAllValues.filter(x => !checkedValues.includes(x));
      filterList[key] = uncheckedValues;
    }
  }

  // console.log(filterList);

  MakeScatter("./data_noise.csv");

  CsvToHtmlTable.init({
    csv_path: "data_noise.csv",
    element: "table-container",
    allow_download: false,
    csv_options: {
      separator: ",",
      delimiter: '"'
    },
    datatables_options: {
      paging: false
    },
  });

  return checked;
}