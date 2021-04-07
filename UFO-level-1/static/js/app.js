// from data.js
var tableData = data;

// get reference to table body
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sightings data from data.js to make sure all is connected and it prints
//console.log(data);

// make a function to loop through and get sighting report and console log to make sure it works then will comment out
// data.forEach(function(sightingReport) {
//     console.log(sightingReport);
//     });

//loop through the data and add it to a table ("tr") need Date, City, State, Country, Shape, Duration, Comments 
// data.forEach(function(sightingReport) {
//       console.log(sightingReport);
//       var row = tbody.append("tr");
//     });

// Next:  Use `Object.entries` to console.log each sightings report value
// data.forEach(function(sightingReport) {
//     console.log(sightingReport);
//     var row = tbody.append("tr");

//   Object.entries(sightingReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Use d3 to append 1 cell per sighting report value (Date, City, State, Country, Shape, Duration)- this will make outline of a table
// data.forEach(function(sightingReport) {
//   console.log(sightingReport);
//   var row = tbody.append("tr");

//   Object.entries(sightingReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Fill in table with data from csv
// // sighting report values (Date, City, State, Country, Shape, Duration)
data.forEach(function(sightingReport) {
  console.log(sightingReport);
  var row = tbody.append("tr");
  Object.entries(sightingReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.


//define function

var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

button.on("click", handleClick);
form.on("submit", handleClick);



// Complete the event handler function for the form
function handleClick() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

    // make sure list is empty and not adding on another search
    if (inputValue.length == 0){

      tbody.html("");

      return default_table();
    }

    //if empty, go to this 
    else {
      var filteredData = data.filter(alien => alien.datetime === inputValue);  
    }  
  
  // remove any children from the list to
    tbody.html("");

  // follow above steps to make table again but with filtered data 
  filteredData.forEach(function(filtered_sightingReport) {
    // console.log(filtered_sightingReport);
    var newRow = tbody.append("tr");
    Object.entries(filtered_sightingReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var newCell = newRow.append("td");
      newCell.text(value);
    });
  });

};
