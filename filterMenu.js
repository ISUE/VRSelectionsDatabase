var includeAllEntries = {
  "Dimensions": ["2D", "3D"],
  "Reference Frame": ["Environment", "Hand", "Torso", "Head"],
  "Proximity": ["Peripersonal", "Extrapersonal", "On-Body"],
  "Target Type": ["3D Object", "UI Element", "Avatar", "Storage unit", "Discrete configuration"],
  "Interactor": ["Ray - Visible", "Ray - Invisible", "Ray - 2D Cursor", "Virtual hand", "Handheld object"],
  "Indication": ["Pointing - Hand ray", "Pointing - Head gaze", "Intersecting", "Aiming - Shooting", "Aiming - Throwing", "Discrete manipulation", "Enclosing"],
  "Confirmation": ["Analog - Click", "Analog - Continued Press", "Analog - Release", "Hand Tracking - Click gesture", "Hand Tracking - Hold gesture", "Hand Tracking - Release gesture", "Press-in motion", "Dwell", "Automatic"],
  "Outcome": ["Acquisition", "System control"]
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

  MakeScatter("./data_website.csv");

  CsvToHtmlTable.init({
    csv_path: "data_website.csv",
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