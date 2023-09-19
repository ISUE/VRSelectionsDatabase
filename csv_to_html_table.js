var CsvToHtmlTable = CsvToHtmlTable || {};

CsvToHtmlTable = {
  init: function (options) {
    options = options || {};
    var csv_path = options.csv_path || "";
    var el = options.element || "table-container";
    var allow_download = options.allow_download || false;
    var csv_options = options.csv_options || {};
    var datatables_options = options.datatables_options || {};
    var custom_formatting = options.custom_formatting || [];
    var customTemplates = {};
    $.each(custom_formatting, function (i, v) {
      var colIdx = v[0];
      var func = v[1];
      customTemplates[colIdx] = func;
    });

    var $table = $("<table class='table table-striped table-condensed' id='" + el + "-table'></table>");
    var $containerElement = $("#" + el);
    $containerElement.empty().append($table);

    $.when($.get(csv_path)).then(
      function (data) {
        console.log(csv_path);
        //console.log(data);  
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var csvHeaderRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        for (var headerIdx = 0; headerIdx < csvHeaderRow.length; headerIdx++) {
          if (headerIdx == 24 || headerIdx == 23 || headerIdx == 22 || headerIdx == 1 ||
            headerIdx == 18 || headerIdx == 19 || headerIdx == 20 || headerIdx == 21) {
            continue;
          }

          else {
            $tableHeadRow.append($("<th></th>").text(csvHeaderRow[headerIdx]));
          }
        }
        $tableHead.append($tableHeadRow);

        $table.append($tableHead);
        var $tableBody = $("<tbody></tbody>");

        for (var rowIdx = 1; rowIdx < csvData.length; rowIdx++) {
          var $tableBodyRow = $("<tr></tr>");
          for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            if (colIdx == 24 || colIdx == 23 || colIdx == 22 || colIdx == 1 || 
              colIdx == 18 || colIdx == 19 || colIdx == 20 || colIdx == 21) {
              continue;
            }

            else {

              var $tableBodyRowTd = $("<td></td>");
              var cellTemplateFunc = customTemplates[colIdx];
              if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
              } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
              }
              $tableBodyRow.append($tableBodyRowTd);
              $tableBody.append($tableBodyRow);
            }
          }
        }
        $table.append($tableBody);

        $table.DataTable(datatables_options);
        console.log("CSV table has been made, now adding click handlers to each header");
        if (allow_download) {
          $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
        }
      });


    var table = document.getElementById("table-container-table");
    for (var i = 0; i < table.rows.length; i++) {
      var row = table.rows[i];
      for (var j = 0; j < row.cells.length; j++) {
        var cell = row.cells[j];
        cell.addEventListener("click", sortTable(i));
      }
    }


    function sortTable(n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("table-container-table");
      switching = true;
      //Set the sorting direction to ascending:
      dir = "asc";
      /*Make a loop that will continue until
      no switching has been done:*/
      while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
          //start by saying there should be no switching:
          shouldSwitch = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /*check if the two rows should switch place,
          based on the direction, asc or desc:*/
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          //Each time a switch is done, increase this count by 1:
          switchcount++;
        } else {
          /*If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again.*/
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }
  }
};