// load the airtable library
var Airtable = require("airtable");

// configure the site to point to your Airtable
// 이 코가 에어테이블을 데이터베이스로 쓴단걸 알수이슨ㄴ부분!
var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keymSqUYIkTHWTClI",
});
var base = Airtable.base("apprQY7Njm4bpnDnO");

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
base("mandala").select().eachPage(gotPageofRows, gotAllRows);

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




function addAlarm() {
  base("mandala").create(
    [
      {
        fields: {
          answers: $("#formAnswers").val(),
          //Date: $("#formDate").val(),
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
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


//modal pop-up ends



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
  speechMsg.rate = prop.rate || 0.6; // 속도: 0.1 ~ 10
  speechMsg.pitch = prop.pitch || 0.5; // 음높이: 0 ~ 2
  speechMsg.lang = prop.lang || "en-US";
  speechMsg.text = text;

  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  window.speechSynthesis.speak(speechMsg);
}

// 이벤트 영역
const selectLang = document.getElementById("select-lang");
const text = document.getElementById("text");
const btnRead = document.getElementById("btn-read");






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

// checkAlarm runs the alarms at the appropriate times.
// you run this function every second to check if it's time to run an alarm.
function checkAlarm() {
  hours = currentDate.getHours();
  minutes = currentDate.getMinutes();
  seconds = currentDate.getSeconds();

  // we're going to log those to the console just so we can see
  console.log(hours + ":" + minutes + ":" + seconds);


  var spokentext0 = $(".number0").text();
  var spokentext1 = $(".number1").text();
  var spokentext2 = $(".number2").text();
  var spokentext3 = $(".number3").text();
  var spokentext4 = $(".number4").text();
  var spokentext5 = $(".number5").text();
  var spokentext6 = $(".number6").text();
  var spokentext7 = $(".number7").text();
  var spokentext8 = $(".number8").text();
  var spokentext9 = $(".number9").text();
  var spokentext10 = $(".number10").text();
  var spokentext11 = $(".number11").text();
  var spokentext12 = $(".number12").text();
  var spokentext13 = $(".number13").text();
  var spokentext14 = $(".number14").text();
  var spokentext15 = $(".number15").text();
  var spokentext16 = $(".number16").text();
  var spokentext17 = $(".number17").text();
  var spokentext18 = $(".number18").text();
  var spokentext19 = $(".number19").text();
  var spokentext20 = $(".number20").text();
  var spokentext21 = $(".number21").text();
  var spokentext22 = $(".number22").text();
  var spokentext23 = $(".number23").text();



  // check if it's time for an alarm.
  if (seconds == 0) {
    speak(spokentext0);
    //reset_clock();
  }

    else if (seconds == 2.5) {
    speak(spokentext1);
    reset_clock()
  } else if (seconds == 5) {
    speak(spokentext2);
    reset_clock();
  } 
   else if (seconds == 7.5) {
    speak(spokentext3);
    reset_clock()
  } else if (seconds == 10) {
    speak(spokentext4);
    reset_clock();
  } 
  else if (seconds == 12.5) {
    speak(spokentext5);
    reset_clock()
  } else if (seconds == 15) {
    speak(spokentext6);
    reset_clock();
  } 
  else if (seconds == 17.5) {
    speak(spokentext7);
    reset_clock()
  } else if (seconds == 20) {
    speak(spokentext8);
    reset_clock();
  } 
  else if (seconds == 22.5) {
    speak(spokentext9);
    reset_clock()
  } else if (seconds == 25) {
    speak(spokentext10);
    reset_clock();
  } 
  else if (seconds == 27.5) {
    speak(spokentext11);
    reset_clock()
  } else if (seconds == 30) {
    speak(spokentext12);
    reset_clock();
  } 



  //
  else {
    console.log("no alarm");
    // alarm = setInterval(checkAlarm, 1000);
  }
}

// this function loops the 'checkAlarm' function
function startAlarm() {
  alarm = setInterval(checkAlarm, 100);
}

startAlarm();

// since we're checking to see if it's time for an alarm every second,
// if it IS time for an alarm, we also need to stop checking that it's an alarm
// until it is the next minute
function reset_clock() {
  // 1 - clear the loop on the alarm
  //clearInterval(alarm);
  // 2 - figure out how many seconds until the next minute
  //var seconds_left = (60 - seconds) * 1000;
  //console.log(seconds_left);
  // 3 - wait until the next minute to start up the loop again
  //setTimeout(startAlarm, seconds_left);
}



