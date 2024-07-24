function createTable() {
    //Write your code here
	var rows = prompt("Input number of rows");
	var cols = prompt("Input number of columns");
	var table = document.getElementById("myTable");
	table.innerHTML = "";
	for (var i = 0; i < rows; i++) {
    var row = table.insertRow();
    for (var j = 0; j < cols; j++) {
      var cell = row.insertCell();
      cell.innerHTML = "Row-" + i + " Column-" + j;
    }
  }
}
