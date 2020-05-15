// from data.js
var tableData = data;

// Select the table by using D3 and html ID

var tbody = d3.select("tbody");

// Run a for loop to go through each object in the data

tableData.forEach((sighting) => {

    // Get to the row html tag and define variable for location

    var row = tbody.append("tr");

    // For loop through key values pairs using Object.entries and appending value to 
    // each column within table, adding a new row for each new row of data

    Object.entries(sighting).forEach(([key, value]) => {

        var sightingInfo = row.append("td");

        sightingInfo.text(value);

    });
});

var button = d3.select("#filter-btn");

var form = d3.select("form")

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    console.log(filteredData);

    tbody.html("");


    filteredData.forEach((search) => {

        // Get to the row html tag and define variable for location
    
        var row = tbody.append("tr");
    
        // For loop through key values pairs using Object.entries and appending value to 
        // each column within table, adding a new row for each new row of data
    
        Object.entries(search).forEach(([key, value]) => {
    
            var sightingInfo = row.append("td");
    
            sightingInfo.text(value);


        });
    });
};




// BONUS PT 2

// Add Date to Filter

var dates = data.map(object => object.datetime);

var filterDate = dates.filter((item, index) => dates.indexOf(item) === index);

var dateSelection = d3.select("#dateDataset");

var dateList = []

filterDate.forEach((date) => {

    var dateSelect = dateSelection.append("option");

    dateSelect.text(date);

    dateList.push(date)

    var currentCount = dateList.length;
  
    dateSelect.attr("value", `value${currentCount}`);

});


// Add Cities to Filter

var cities = data.map(object => object.city).sort();

var filterCity = cities.filter((item, index) => cities.indexOf(item) === index);

var citySelection = d3.select("#cityDataset");

var cityList = []

filterCity.forEach((city) => {

    var citySelect = citySelection.append("option");

    citySelect.text(city);

    cityList.push(city)

    var currentCount = cityList.length;
  
    citySelect.attr("value", `value${currentCount}`);

});


// Add State to Filter

var states = data.map(object => object.state).sort();

var filterState = states.filter((item, index) => states.indexOf(item) === index);

var stateSelection = d3.select("#stateDataset");

var stateList = []

filterState.forEach((state) => {

    var stateSelect = stateSelection.append("option");

    stateSelect.text(state);

    stateList.push(state)

    var currentCount = stateList.length;
  
    stateSelect.attr("value", `value${currentCount}`);

});


// Add Country to Filter

var countries = data.map(object => object.country).sort();

var filterCountry = countries.filter((item, index) => countries.indexOf(item) === index);

var countrySelection = d3.select("#countryDataset");

var countryList = []

filterCountry.forEach((country) => {

    var countrySelect = countrySelection.append("option");

    countrySelect.text(country);

    countryList.push(country);

    var currentCount = countryList.length;
  
    countrySelect.attr("value", `value${currentCount}`);

});

// Add Shape to Filter

var shapes = data.map(object => object.shape).sort();

var filterShape = shapes.filter((item, index) => shapes.indexOf(item) === index);

var shapeSelection = d3.select("#shapeDataset");

var shapeList = []

filterShape.forEach((shape) => {

    var shapeSelect = shapeSelection.append("option");

    shapeSelect.text(shape);

    shapeList.push(shape);

    var currentCount = shapeList.length;
  
    shapeSelect.attr("value", `value${currentCount}`);

});



// var filterDateClick = d3.select("#btnGroupDrop1");

// function filterDates(sighting) {
//     return sighting.datetime;
//   }
  
//   // 2. Use filter() to pass the function as its argument
//   var filteredDates = data.filter(filterDates);
  