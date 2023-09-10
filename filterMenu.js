// function parseCSV(filePath) {
//     var parser =
//     Papa.parse(filePath, {
//       header: true,
//       dynamicTyping: true,
//     });
//     return parser.data;
//   }

  
  //var filteredData = filterRows(data, ["column1", "column2"]);
  function readCSV(){
    var dataCSV = [];

    var reader = new FileReader();
    reader.onload = function() {
      var csvData = reader.result;
      var lines = csvData.split("\n");
    
      for (var line of lines) {
        var row = line.split(",");
        dataCSV.push(row);
      }
    };
    
    reader.readAsText('./with_colors.csv');
    return dataCSV


  }

  function previewFile() {
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    
  
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        //content.innerText = reader.result;
        console.log(typeof(reader.result));
      },
      false,
    );
  
    if (file) {
      reader.readAsText(file);
      console.log(reader.result)
    }

  }



function uncheckAllCheckboxes() {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    console.log("Count of checkboxes is " + checkboxes.length);
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }

    var collapsibles = document.querySelectorAll("[data-bs-toggle='collapse']");
    console.log("Count of collapsibles is " + collapsibles.length);

}

  function checkboxStates(){
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    var cbLabels = document.querySelectorAll("label");

    var checkedCheckboxes = [];
    var labelValues = [];

    for (var i=0; i < checkboxes.length;i++) {
      if (checkboxes[i].checked) {
        checkedCheckboxes.push(checkboxes[i].value); 
        labelValues.push(cbLabels[i].innerHTML.trim().replace(/&nbsp;/g, ''));
      }
    }



    console.log(checkedCheckboxes);
    console.log(labelValues);
  }



// Function runs on chart type select update
function updateChartTypeA() {
    // Default chart defined with type: 'line'
    var ctx = document.getElementById('my_Chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: myData
    });

    // here we destroy/delete the old or previous chart and redraw it again
    myChart.destroy();
    myChart = new Chart(ctx, {
        type: document.getElementById("chartType").value,
        data: myData,
    });

};

// Function runs on chart type select update
function updateChartTypeB() {
  
  
  //myChart.data.datasets[0].data[7] = 60;
  //myChart.data.labels[7] = "Newly Added";


  myChart.update();

};

function filterRows(data, criteria) {
  var filteredData = [];
  for (var row of data) {
    var matches = true;
    for (var criterion of criteria) {
      if (!row[criterion]) {
        matches = false;
        break;
      }
    }
    if (matches) {
      filteredData.push(row);
    }
  }
  return filteredData;
}