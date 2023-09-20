
// //This is solely for testing Button onClick
// function myFunction() {
//     console.log("Here is the Scatterplot data ");
//     console.log(data);
//   }

var myScatter;

function MakeScatter(csv_path = "./data_noise.csv") {

  var TITLE = 'Object selection scenarios in VR (t-SNE Feature Space)';
  var POINT_X = 'X'; // column name for x values in data.csv
  var POINT_X_PREFIX = ''; // prefix for x values, eg '$'
  var POINT_X_POSTFIX = ''; // postfix for x values, eg '%'

  var POINT_Y = 'Y'; // column name for y values in data.csv
  var POINT_Y_PREFIX = ''; // prefix for x values, eg 'USD '
  var POINT_Y_POSTFIX = ''; // postfix for x values, eg ' kg'

  var POINT_NAME = 'Application'; // point names that appear in tooltip
  //var POINT_COLOR = 'rgba(0,255,0,0.7)'; // eg `black` or `rgba(10,100,44,0.8)`
  var POINT_COLOR = 'color'; // eg `black` or `rgba(10,100,44,0.8)`
  var POINT_RADIUS = 5; // radius of each data point

  //Additional Fields/Features that will be retrieved per row of CSV
  var POINT_LINK = 'Timestamp'; // column name for x values in data.csv
  var POINT_DESCRIPTION = 'Description'; // column name for x values in data.csv
  var POINT_UI = 'Flat UI'; // column name for x values in data.csv
  var POINT__SPEED_ACCURACY = 'Speed vs Accuracy'; // column name for x values in data.csv
  var POINT_NUM_SELECTABLE = 'Avg. num selectables in view'; // column name for x values in data.csv
  var POINT_MAX_NUM_SELECTABLE = 'Max num selectables in view'; // column name for x values in data.csv
  var POINT_UNIQUE_TARGET = 'Unique target'; // column name for x values in data.csv
  //var POINT_SHAPE = 'shape'; // column name for x values in data.csv
  var POINT_SIZE = 'Selectable size'; // column name for x values in data.csv
  var POINT_DISTANCE = 'Target distance'; // column name for x values in data.csv
  var POINT_STATIC_MOVING = 'Static or moving target'; // column name for x values in data.csv
  var POINT_ARRANGEMENT = 'Arrangement'; // column name for x values in data.csv
  var POINT_REFERENCE_FRAME = 'Reference Frame'; // column name for x values in data.csv
  var POINT_DIRECTION = 'Direction'; // column name for x values in data.csv
  var POINT_OCCLUSION = 'Occlusion'; // column name for x values in data.csv
  //var POINT_SELECTION_MECHANIC = 'is_mechanic'; // column name for x values in data.csv
  var POINT_SELECTION_TECHNIQUE = 'Selection Technique'; // column name for x values in data.csv
  var POINT_HOVER_INDICATION = 'Hover feedback'; // column name for x values in data.csv
  var POINT_SELECTION_IMMEDIACY = 'Feedback immediacy'; // column name for x values in data.csv
  var POINT_LOCOMOTION_ALLOWED = 'Locomotion allowed'; // column name for x values in data.csv


  /////////////////////////////
  var X_AXIS = ''; // x-axis label, label in tooltip
  var Y_AXIS = ''; // y-axis label, label in tooltip

  var SHOW_GRID = true; // `true` to show the grid, `false` to hide

  // Read data file with random string generated by current time
  // to bypass browser cache, and create chart

  $.get(csv_path, { '_': $.now() }, function (csvString) {

    var rows = Papa.parse(csvString, { header: true }).data;

    var data = rows.map(function (row) {
      return {
        x: row[POINT_X],
        y: row[POINT_Y],
        name: row[POINT_NAME],
        link: row[POINT_LINK],
        description: row[POINT_DESCRIPTION],
        ui: row[POINT_UI],
        speedAccuracy: row[POINT__SPEED_ACCURACY],
        numSelectable: row[POINT_NUM_SELECTABLE],
        maxNumSelectable: row[POINT_MAX_NUM_SELECTABLE],
        uniqueTarget: row[POINT_UNIQUE_TARGET],
        size: row[POINT_SIZE],
        distance: row[POINT_DISTANCE],
        staticMoving: row[POINT_STATIC_MOVING],
        arrangement: row[POINT_ARRANGEMENT],
        referenceFrame: row[POINT_REFERENCE_FRAME],
        direction: row[POINT_DIRECTION],
        occlusion: row[POINT_OCCLUSION],
        selectionTechnique: row[POINT_SELECTION_TECHNIQUE],
        hoverIndication: row[POINT_HOVER_INDICATION],
        selectionImmediacy: row[POINT_SELECTION_IMMEDIACY],
        locomotionAllowed: row[POINT_LOCOMOTION_ALLOWED],
        color: row[POINT_COLOR]
      }
    })

    // Filterable features and their names between CSV and JS code
    // "Flat UI": ui
    // "Speed vs Accuracy": speedAccuracy
    // "Avg. num selectables in view": numSelectable
    // "Max num selectables in view": maxNumSelectable
    // "Unique target": uniqueTarget
    // "Selectable size": size
    // "Target distance": distance
    // "Static or moving target": staticMoving
    // "Arrangement": arrangement
    // "Reference Frame": referenceFrame
    // "Direction": direction
    // "Occlusion": occlusion
    // "Selection Technique": selectionTechnique
    // "Hover feedback": hoverIndication
    // "Feedback immediacy": selectionImmediacy
    // "Locomotion allowed": locomotionAllowed

    for (const filterKey in filterList) {
      //   console.log("Filtering out " + filterValue + " from " + filterKey);
      if (filterKey === "Flat UI") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.ui !== filterValue;
          });
        }
      }

      if (filterKey === "Speed vs Accuracy") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.speedAccuracy !== filterValue;
          });
        }
      }

      if (filterKey === "Avg. num selectables in view") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.numSelectable !== filterValue;
          });
        }
      }

      if (filterKey === "Max num selectables in view") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.maxNumSelectable !== filterValue;
          });
        }
      }

      if (filterKey === "Unique target") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.uniqueTarget !== filterValue;
          });
        }
      }

      if (filterKey === "Selectable size") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.size !== filterValue;
          });
        }
      }

      if (filterKey === "Target distance") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.distance !== filterValue;
          });
        }
      }

      if (filterKey === "Static or moving target") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.staticMoving !== filterValue;
          });
        }
      }

      if (filterKey === "Arrangement") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.arrangement !== filterValue;
          });
        }
      }

      if (filterKey === "Reference Frame") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.referenceFrame !== filterValue;
          });
        }
      }

      if (filterKey === "Direction") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.direction !== filterValue;
          });
        }
      }

      if (filterKey === "Occlusion") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.occlusion !== filterValue;
          });
        }
      }

      if (filterKey === "Selection Technique") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.selectionTechnique !== filterValue;
          });
        }
      }

      if (filterKey === "Hover feedback") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.hoverIndication !== filterValue;
          });
        }
      }

      if (filterKey === "Feedback immediacy") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.selectionImmediacy !== filterValue;
          });
        }
      }

      if (filterKey === "Locomotion allowed") {
        for (const filterValue of filterList[filterKey]) {
          data = data.filter(function (point) {
            return point.locomotionAllowed !== filterValue;
          });
        }
      }
    }
    // console.log(data);
    // console.log("length of filtered data " + data.length);

    var scatterChartData = {
      datasets: [{
        label: 'My First dataset',
        //backgroundColor: POINT_COLOR,
        data: data,
        pointRadius: POINT_RADIUS,
        pointHoverRadius: POINT_RADIUS + 2,
        pointBackgroundColor: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value.color;
        }
      }]
    };

    var ctx = document.getElementById('container').getContext('2d');
    var dataPointModal = new bootstrap.Modal(document.getElementById('dataPointModal'), {
      keyboard: false
    });

    if (myScatter) {
      myScatter.destroy();
    }

    myScatter = new Chart(ctx, {
      type: "scatter",
      data: scatterChartData,
      options: {
        title: {
          display: true,
          text: TITLE,
          fontSize: 14,
        },
        legend: {
          display: false, // TODO
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: false,
              labelString: X_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              display: true,
              maxTicksLimit: 35,
              stepSize: 5,
              callback: function (value, index, values) {
                return POINT_X_PREFIX + value.toLocaleString() + POINT_X_POSTFIX;
              }
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: false,
              labelString: Y_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              display: true,
              maxTicksLimit: 35,
              stepSize: 5,
              callback: function (value, index, values) {
                return POINT_Y_PREFIX + value.toLocaleString() + POINT_Y_POSTFIX;
              }
            }
          }]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title: function (tooltipItem, all) {
              return [
                all.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index].name,
              ]
            },
            label: function (tooltipItem, all) {
              let item = all.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return [
                item.selectionTechnique,
                item.distance,
                item.referenceFrame,
                item.ui,
              ]
            }
          }
        },

        onClick: function (e) {
          // Get the data point that was clicked on
          var dataPoint = myScatter.getElementAtEvent(e);

          // print datapoint color

          const datasetIndex = dataPoint[0]._datasetIndex;
          const itemIndex = dataPoint[0]._index;
          var value = myScatter.data.datasets[datasetIndex].data[itemIndex];

          console.log(value.color);
          // console.log(value.link);

          document.getElementById('feature1.AppName').innerText = value.name;
          document.getElementById('feature3.Description').innerText = value.description;
          document.getElementById('feature4.UI').innerText = value.ui;
          document.getElementById('feature5.SpeedAccuracy').innerText = value.speedAccuracy;
          document.getElementById('feature6.NumSelectable').innerText = value.numSelectable;
          document.getElementById('feature7.MaxNumSelectable').innerText = value.maxNumSelectable;
          document.getElementById('feature8.UniqueTarget').innerText = value.uniqueTarget;
          document.getElementById('feature9.Size').innerText = value.size;
          document.getElementById('feature10.Distance').innerText = value.distance;
          document.getElementById('feature11.StaticMoving').innerText = value.staticMoving;
          document.getElementById('feature12.Arrangement').innerText = value.arrangement;
          document.getElementById('feature13.ReferenceFrame').innerText = value.referenceFrame;
          document.getElementById('feature14.Direction').innerText = value.direction;
          document.getElementById('feature15.Occlusion').innerText = value.occlusion;
          document.getElementById('feature16.SelectionTechnique').innerText = value.selectionTechnique;
          document.getElementById('feature17.HoverIndication').innerText = value.hoverIndication;
          document.getElementById('feature18.SelectionImmediacy').innerText = value.selectionImmediacy;
          document.getElementById('feature19.LocomotionAlowed').innerText = value.locomotionAllowed;


          var button = document.getElementById('youtubeButton');
          var new_button = button.cloneNode(true);
          button.parentNode.replaceChild(new_button, button);

          new_button.addEventListener("click", function () {
            var youtubeLink = value.link;
            window.open(youtubeLink, "_blank");
          });


          dataPointModal.toggle();


          // Do something with the data point, such as displaying more information about it or opening a new page
          //alert("You clicked on the point with x = " + dataPoint.x+ " and y = " + dataPoint.y);
        }
      }
    });

  });
}

$(document).ready(MakeScatter("./data_noise.csv"));

// // Function to be called with the state of the toggle
// function handleNoiseToggleState(isChecked) {
//   console.log("Noise Toggle is: ", isChecked ? "ON" : "OFF");
//   if (isChecked) { MakeScatter("./data_noise.csv"); }
//   else { MakeScatter(); }
// }

// // Attach event listener to the AddNoiseSwitch switch
// document.getElementById('AddNoiseSwitch').addEventListener('change', function () {
//   handleNoiseToggleState(this.checked);
// });