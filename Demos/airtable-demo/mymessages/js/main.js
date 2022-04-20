console.log("Hello wikipedia");

// load the airtable library
var Airtable = require("airtable");

// configure the site to point to your Airtable
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: 'keyMtkwYmfTiXSzA3'
// });
// var base = Airtable.base('appaP9N6bcCt8D3IT');

var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "appvQEuqcLuW6tW9f",
});
var base = Airtable.base("appvQEuqcLuW6tW9f");

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
base("alarmclock")
  .select({
    // If you want to sort the records, include that here:
    //  sort: [
    //     {field: 'Title', direction: 'asc'}
    // ],
  })
  .eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable,
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
  console.log("gotPageofRows()");

  rows.push(...records);

  fetchNextPage();
}

// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
  console.log("gotAllRows()");

  // first, if there's an error we're going to log that.
  if (err) {
    console.log("Error loading rows");
    console.error(err);
    return;
  }

  // if no error, we're going to run two more functions.
  consoleLogRows();
  showRows(setup_clock);
}

// consoleLogRows simply logs each row to the console,
// so you can see it's data and fields.
function consoleLogRows() {
  console.log("consoleLogRows()");

  rows.forEach((row) => {
    console.log("Row:", row);
  });
}

// showRows is what puts the content onto the HTML page
function showRows(setup_clock) {
  console.log("showRows()");
  rows.forEach((row) => {
    const date_published = new Date(row.fields.date);
    // console.log(date_published);

    if (date_published.getMonth() == 0) {
      console.log(row.fields.Title + " was published in january");
    }

    // console.log(row._rawJson.createdTime);

    // const li = document.createElement("li");
    // li.innerText = row.fields.Title;
    // document.body.appendChild(li);

    // // uncomment this code to add the description column from the table.
    // const div = document.createElement("div");
    // div.innerText = row.fields.Description;
    // div.classList.add("description");
    // document.body.appendChild(div);

    // // uncomment this code to add the images from the table.
    // const image = document.createElement("img");
    // image.src = row.fields.icon[0].url;
    // document.body.appendChild(image);
  });
  setup_clock();
}

// get the current time
// look through the array of rows to see if the current time
// matches the time in the row
// if it matches, play the sound from the row.

function setup_clock() {
  var clock = setInterval(check_time, 1000);
}

function check_time() {
  var now = new Date();
  var current_hours = now.getHours();
  var current_minutes = now.getMinutes();

  for (i = 0; i < rows.length; i++) {
    var date = new Date(rows[i].fields.Date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    console.log(hours + ":" + minutes);

    if (current_hours == hours && current_minutes == minutes) {
      console.log("Play alarm");
    }
  }
}
