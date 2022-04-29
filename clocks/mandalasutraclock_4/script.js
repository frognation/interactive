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

//modal pop-up ends

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

var currentDate,
    hours,
    minutes,
    seconds,
    alarm;

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// setClock updates the time on the clock.
function setClock() {
  currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
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
  

    
    // check if it's time for an alarm.
    // this alarm is set for 10:15pm.
    if ((hours == 13) && (minutes == 10) && (seconds == 55)) {
      
      // here's where you run the alarm.
      // in this example it's just a pop-up
      alert("Hi, did you have lunch? Don't forget to feed my cat.");
      
      // after you run the alarm, you have to reset the clock; 
      // i.e. you shouldn't run the alarm again until it's the next minute.
      reset_clock();
    } 


    else {
      console.log("no alarm");
      // alarm = setInterval(checkAlarm, 1000);
    }
};

// this function loops the 'checkAlarm' function
function startAlarm() {
    alarm = setInterval(checkAlarm, 1000);
}

startAlarm();

// since we're checking to see if it's time for an alarm every second,
// if it IS time for an alarm, we also need to stop checking that it's an alarm 
// until it is the next minute
function reset_clock() {

  // 1 - clear the loop on the alarm
  clearInterval(alarm);

  // 2 - figure out how many seconds until the next minute
  var seconds_left = (60 - seconds) * 1000;

  console.log(seconds_left);

  // 3 - wait until the next minute to start up the loop again
  setTimeout(startAlarm, seconds_left);
}





