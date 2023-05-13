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
