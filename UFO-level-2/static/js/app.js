// from data.js
var tableData = data;

// get reference to table body
// Get a reference to the table body
var tbody = d3.select("tbody");



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
  var countryx = d3.select("#country");
  var statex = d3.select("#state");
  var cityx = d3.select("#city");
  var shapex = d3.select("#shape");


  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var country = countryx.property("value");
  var state = statex.property("value");
  var city = cityx.property("value");
  var shape = shapex.property("value");
  




    // make sure list is empty and not adding on another search
    if (inputValue.length == 0){

      tbody.html("");

      return default_table();
    }

    else {
      var filteredData = data.filter(alien => alien.datetime === inputValue);  
    }  

    if (country.length == 0){

      tbody.html("");

      return default_table();
    }

    else {
      var filteredData = data.filter(alien => alien.country === country);  
    }  

    if (state.length == 0){

      tbody.html("");

      return default_table();
    }

    else {
      var filteredData = data.filter(alien => alien.state === state);  
    }  


    if (city.length == 0){

      tbody.html("");

      return default_table();
    }

    else {
      var filteredData = data.filter(alien => alien.city === city);  
    }  


    if (shape.length == 0){

      tbody.html("");

      return default_table();
    }
    
    else {
      var filteredData = data.filter(alien => alien.shape === shape);  
    }  
  

    // //if empty, go to this 
    // else {
    //   var filteredData = data.filter(alien => alien.datetime === inputValue);  
    // }  
    // else {
    //   var filteredData = data.filter(alien => alien.country === country);  
    // }  
  
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
