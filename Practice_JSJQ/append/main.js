document.addEventListener("keydown", function (e) {
  if (e.keyCode == 65) {
    document.getElementById("audio_a").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 66) {
    document.getElementById("audio_b").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 67) {
    document.getElementById("audio_c").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 75) {
    document.getElementById("audio_k").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 76) {
    document.getElementById("audio_l").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 84) {
    document.getElementById("audio_t").play();
  }
});



$(window).keydown(function (key_press_event) {
  var key = key_press_event.key;

  console.log(key);

  if (key == "a") {
    $("body").append("<img src='images/A-1.gif' width=100px/>");
  }

  if (key == "b") {
    $("body").append("<img src='images/B-1.gif' width=100px/>");
  }

  if (key == "c") {
    $("body").append("<img src='images/C-1.gif' width=100px/>");
  }

  if (key == "k") {
    $("body").append("<img src='images/K-1.gif' width=100px/>");
  }

  if (key == "l") {
    $("body").append("<img src='images/L-1.gif' width=100px/>");
  }

  if (key == "t") {
    $("body").append("<img src='images/T-1.gif' width=100px/>");
  }
});
