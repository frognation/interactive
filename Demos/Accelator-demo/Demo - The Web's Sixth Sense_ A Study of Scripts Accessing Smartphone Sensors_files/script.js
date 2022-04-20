var orientation_alpha,
    orientation_beta,
    orientation_gamma,
    accelerometer_x,
    accelerometer_y,
    accelerometer_z,
    accelerometerWithGravity_x,
    accelerometerWithGravity_y,
    accelerometerWithGravity_z,
    gyroscope_x,
    gyroscope_y,
    gyroscope_z;

function handleOrientation(event) {
  
  orientation_alpha = event.alpha;
  orientation_beta = event.beta;
  orientation_gamma = event.gamma;
  
  $("#Orientation_a").html(orientation_alpha);
  $("#Orientation_b").html(orientation_beta);
  $("#Orientation_g").html(orientation_gamma);
}

function incrementEventCount() {
  let counterElement = document.getElementById("num-observed-events");
  let eventCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = eventCount + 1;
}

function updateFieldIfNotNull(fieldName, value, precision = 10) {
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
}

function handleMotion(event) {
  
  accelerometerWithGravity_x = event.accelerationIncludingGravity.x;
  accelerometerWithGravity_y = event.accelerationIncludingGravity.y;
  accelerometerWithGravity_z = event.accelerationIncludingGravity.z;
  
  $("#Accelerometer_gx").html(accelerometerWithGravity_x);
  $("#Accelerometer_gy").html(accelerometerWithGravity_y);
  $("#Accelerometer_gz").html(accelerometerWithGravity_z);
  
  accelerometer_x = event.acceleration.x;
  accelerometer_y = event.acceleration.y;
  accelerometer_z = event.acceleration.z;
  
  $("#Accelerometer_x").html(accelerometerWithGravity_x);
  $("#Accelerometer_y").html(accelerometerWithGravity_y);
  $("#Accelerometer_z").html(accelerometerWithGravity_z);
  
  gyroscope_x = event.rotationRate.beta;
  gyroscope_y = event.rotationRate.gamma;
  gyroscope_z = event.rotationRate.alpha;
  
  $("#Gyroscope_x").html(accelerometerWithGravity_x);
  $("#Gyroscope_y").html(accelerometerWithGravity_y);
  $("#Gyroscope_z").html(accelerometerWithGravity_z);
}

// by deafault, isn't running
let is_running = false;
let demo_button = document.getElementById("start_demo");

// when you click the 'start demo button...'
demo_button.onclick = function (e) {
  e.preventDefault();

  // Request permission for iOS 13+ devices
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }

// if the demo is running when you press the button, stop the demo.
  if (is_running) {
    window.removeEventListener("devicemotion", handleMotion);
    window.removeEventListener("deviceorientation", handleOrientation);
    demo_button.innerHTML = "Start demo";
    demo_button.classList.add("btn-success");
    demo_button.classList.remove("btn-danger");
    is_running = false;
  } 
  
//  if the demo is not running, start the demo.
  else {
    // when the window detects a change in motion or orientation, run the handleMotion and the handleOrientation functions.
    window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("deviceorientation", handleOrientation);
    document.getElementById("start_demo").innerHTML = "Stop demo";
    demo_button.classList.remove("btn-success");
    demo_button.classList.add("btn-danger");
    is_running = true;
  }
};

/*
Light and proximity are not supported anymore by mainstream browsers.
window.addEventListener('devicelight', function(e) {
   document.getElementById("DeviceLight").innerHTML="AmbientLight current Value: "+e.value+" Max: "+e.max+" Min: "+e.min;
});

window.addEventListener('lightlevel', function(e) {
   document.getElementById("Lightlevel").innerHTML="Light level: "+e.value;
});

window.addEventListener('deviceproximity', function(e) {
   document.getElementById("DeviceProximity").innerHTML="DeviceProximity current Value: "+e.value+" Max: "+e.max+" Min: "+e.min;
});

window.addEventListener('userproximity', function(event) {
   document.getElementById("UserProximity").innerHTML="UserProximity: "+event.near;
});
*/
