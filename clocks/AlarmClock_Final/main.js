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
  speechMsg.lang = prop.lang || "en-US"; // "ko-KR"
  speechMsg.text = text;

  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  window.speechSynthesis.speak(speechMsg);
}

// 이벤트 영역
const selectLang = document.getElementById("select-lang");
const text = document.getElementById("text");
const btnRead = document.getElementById("btn-read");

var alarm, current_seconds;

// setup clock checks the time every 1s.
function startAlarm() {
  console.log("startAlarm()");
  alarm = setInterval(check_time, 10000);
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

    // adjust time zone of times from airtable
    // var hours_adjusted = hours + 5;

    //console.log("hours adjusted =" + hours_adjusted);
    var minutes = date.getMinutes();

    if (current_hours == hours && minutes == minutes) {
      var alarm = rows[i].fields.message;
      console.log("MESSAGE IS" + alarm);
      speak(alarm);
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

  // window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

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

function addAlarm() {
  base("alarmclock").create(
    [
      {
        fields: {
          message: $("#formMessage").val(),
          Date: $("#formDate").val(),
          Sender: $("#formSender").val(),
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}

//// modal popup

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//modal pop-up ends

// all this code that is commented out is now in main.js...
// checkAlarm runs the alarms at the appropriate times.
// you run this function every second to check if it's time to run an alarm.
// function checkAlarm() {
//   hours = currentDate.getHours();
//   minutes = currentDate.getMinutes();
//   seconds = currentDate.getSeconds();

//   // we're going to log those to the console just so we can see
//   console.log(hours + ":" + minutes + ":" + seconds);

//   // check if it's time for an alarm.
//   // this alarm is set for 10:15pm.
//   if (hours == 13 && minutes == 10 && seconds == 55) {
//     // here's where you run the alarm.
//     // in this example it's just a pop-up
//     alert("1Hi, did you have lunch? Don't forget to feed my cat.");

//     // after you run the alarm, you have to reset the clock;
//     // i.e. you shouldn't run the alarm again until it's the next minute.

//   }

// // here's a second alarm set for 11:45pm.
// else if (hours == 13 && minutes == 53 && seconds == 55) {
//   alert("Hi, did you have lunch? Don't forget to feed my cat.");
//   reset_clock();
// }
// else if (seconds == 0) {
//   speak("Hi I'm jisung!! ");
//   reset_clock();
// } else if (seconds == 10) {
//   speak("hey, wake up jisung.");
//   reset_clock();
// } else if (seconds == 20) {
//   speak("Hi, I'm jisung. I'm hungry.");
//   reset_clock();
// } else if (seconds == 30) {
//   speak("nice to meet you jisung.");
//   reset_clock();
// } else if (seconds == 40) {
//   speak("Hi, this is jisung.");
//   reset_clock();
// } else if (seconds == 50) {
//   speak("When are you coming home jisung?");
//   reset_clock();
// }

//
// else {
//   console.log("no alarm");
//   // alarm = setInterval(checkAlarm, 1000);
// }
// }

// this function loops the 'checkAlarm' function
// function startAlarm() {
//   alarm = setInterval(checkAlarm, 100);
// }

// startAlarm();

// since we're checking to see if it's time for an alarm every second,
// if it IS time for an alarm, we also need to stop checking that it's an alarm
// until it is the next minute

//modal popup
function show() {
  document.querySelector(".background").className = "background show";
}

function close() {
  document.querySelector(".background").className = "background";
}

document.querySelector("#show").addEventListener("click", show);
document.querySelector("#close").addEventListener("click", close);

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
  speechMsg.lang = prop.lang || "en-US"; // "ko-KR"
  speechMsg.text = text;

  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  window.speechSynthesis.speak(speechMsg);
}

// 이벤트 영역
const selectLang = document.getElementById("select-lang");
const text = document.getElementById("text");
const btnRead = document.getElementById("btn-read");
