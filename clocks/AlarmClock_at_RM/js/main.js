// load the airtable library
var Airtable = require("airtable");

// configure the site to point to your Airtable
// 이 코가 에어테이블을 데이터베이스로 쓴단걸 알수이슨ㄴ부분!
var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keymSqUYIkTHWTClI",
});
var base = Airtable.base("appvQEuqcLuW6tW9f");

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
base("alarmclock").select().eachPage(gotPageofRows, gotAllRows);

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
  if (err) {
    console.log("Error loading rows");
    console.error(err);
    return;
  }
  consoleLogRows();
  showRows(startAlarm);
}

// consoleLogRows simply logs each row to the console,
// so you can see it's data and fields.
function consoleLogRows() {
  console.log("consoleLogRows()");
  rows.forEach((row) => {
    console.log("Row:", row);
  });
}

// showRows is what puts the content onto the HTML page.
// In this project, i think you only want the dots on the page.
function showRows(startAlarm) {
  console.log("showRows()");
  rows.forEach((row) => {
    // here's where you create the dots for each alarm.
  });
  startAlarm();
}

var alarm, current_seconds;

// setup clock checks the time every 1s.
function startAlarm() {
  console.log("startAlarm()");
  alarm = setInterval(check_time, 1000);
}

// check time
function check_time() {
  var now = new Date();
  var current_hours = now.getHours();
  var current_minutes = now.getMinutes();
  current_seconds = now.getSeconds();
  console.log(current_hours + ":" + current_minutes + ":" + current_seconds);
  for (i = 0; i < rows.length; i++) {
    var date = new Date(rows[i].fields.Date);
    var hours = date.getHours();
    var minutes = date.getMinutes();

    if (current_hours == hours && current_minutes == minutes) {
      var alarm = rows[i].fields.message;
      console.log("Play alarm");
      speak("Hi Rosa!");
      reset_clock();
    } else {
      console.log("no alarm");
    }
  }
}

// reset the clock makes sure the alarm only plays once per minute.
function reset_clock() {
  // 1 - clear the loop on the alarm
  clearInterval(alarm);
  // 2 - figure out how many seconds until the next minute
  var seconds_left = (60 - seconds) * 1000;
  console.log(seconds_left);
  // 3 - wait until the next minute to start up the loop again
  setTimeout(startAlarm, seconds_left);
}

// text to speach
function speak(text, opt_prop) {
  if (
    typeof SpeechSynthesisUtterance === "undefined" ||
    typeof window.speechSynthesis === "undefined"
  ) {
    alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
    return;
  }

  window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

  const prop = opt_prop || {};

  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.rate = prop.rate || 1; // 속도: 0.1 ~ 10
  speechMsg.pitch = prop.pitch || 1; // 음높이: 0 ~ 2
  speechMsg.lang = prop.lang || "en-US";
  speechMsg.text = text;

  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  window.speechSynthesis.speak(speechMsg);
}

// 이벤트 영역
const selectLang = document.getElementById("select-lang");
const text = document.getElementById("text");
const btnRead = document.getElementById("btn-read");

// clock animation
var currentDate, hours, minutes, seconds, alarm;

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

// setClock updates the time on the clock.
function setClock() {
  currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
setInterval(setClock, 1000);
