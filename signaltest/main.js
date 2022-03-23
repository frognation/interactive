// document.addEventListener("keydown", function (e) {
//   if (e.keyCode == 65) {
//     document.getElementById("audio_a").play();
//   }
// });

/*
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 66) {
    // document.getElementById("audio_b").play();
    var audio_b = new Audio('sounds/B-1.mp3');
    audio_b.play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 67) {
    // document.getElementById("audio_c").play();
    var audio_c = new Audio('filename goes here');
    audio_c.play();
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
*/


$(window).keydown(function (key_press_event) {
  var key = key_press_event.key;

  console.log(key);

  if (key == "a") {
    $("body").append('<div class="wrapper"><div class="letter">A</div><div class="cover"></div></div>');
    var audio_b = new Audio('sounds/A-1.mp3');
    audio_b.play();
  }

  if (key == "b") {
    $("body").append('<div class="wrapper"><div class="letter">B</div><div class="cover"></div></div>');
    var audio_b = new Audio('sounds/B-1.mp3');
    audio_b.play();
    }

    if (key == "c") {
      $("body").append('<div class="wrapper"><div class="letter">C</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  

    if (key == "d") {
      $("body").append('<div class="wrapper"><div class="letter">D</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/d-1.mp3');
      audio_b.play();
      }
  
    if (key == "e") {
      $("body").append('<div class="wrapper"><div class="letter">E</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "f") {
      $("body").append('<div class="wrapper"><div class="letter">F</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "g") {
      $("body").append('<div class="wrapper"><div class="letter">G</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "h") {
      $("body").append('<div class="wrapper"><div class="letter">H</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "i") {
      $("body").append('<div class="wrapper"><div class="letter">I</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "j") {
      $("body").append('<div class="wrapper"><div class="letter">J</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "k") {
      $("body").append('<div class="wrapper"><div class="letter">K</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/K-1.mp3');
      audio_b.play();
      }
  
    if (key == "l") {
      $("body").append('<div class="wrapper"><div class="letter">L</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/L-1.mp3');
      audio_b.play();
      }
  
    if (key == "m") {
      $("body").append('<div class="wrapper"><div class="letter">M</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  

    if (key == "n") {
      $("body").append('<div class="wrapper"><div class="letter">N</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  

    if (key == "o") {
      $("body").append('<div class="wrapper"><div class="letter">O</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  

    if (key == "p") {
      $("body").append('<div class="wrapper"><div class="letter">P</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  

    if (key == "q") {
      $("body").append('<div class="wrapper"><div class="letter">Q</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  

    if (key == "r") {
      $("body").append('<div class="wrapper"><div class="letter">R</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  

    if (key == "s") {
      $("body").append('<div class="wrapper"><div class="letter">S</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  

    if (key == "t") {
      $("body").append('<div class="wrapper"><div class="letter">T</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/T-1.mp3');
      audio_b.play();
      }
  
    if (key == "u") {
      $("body").append('<div class="wrapper"><div class="letter">U</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "v") {
      $("body").append('<div class="wrapper"><div class="letter">V</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "w") {
      $("body").append('<div class="wrapper"><div class="letter">W</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "x") {
      $("body").append('<div class="wrapper"><div class="letter">X</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "y") {
      $("body").append('<div class="wrapper"><div class="letter">Y</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "z") {
      $("body").append('<div class="wrapper"><div class="letter">Z</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }




//Numbers

    if (key == "1") {
      $("body").append('<div class="wrapper"><div class="letter">1</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "2") {
      $("body").append('<div class="wrapper"><div class="letter">2</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "3") {
      $("body").append('<div class="wrapper"><div class="letter">3</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
     if (key == "4") {
      $("body").append('<div class="wrapper"><div class="letter">4</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "5") {
      $("body").append('<div class="wrapper"><div class="letter">5</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "6") {
      $("body").append('<div class="wrapper"><div class="letter">6</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
       
    if (key == "7") {
      $("body").append('<div class="wrapper"><div class="letter">7</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "8") {
      $("body").append('<div class="wrapper"><div class="letter">8</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
    if (key == "9") {
      $("body").append('<div class="wrapper"><div class="letter">9</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }
  
     if (key == "0") {
      $("body").append('<div class="wrapper"><div class="letter">0</div><div class="cover"></div></div>');
      var audio_b = new Audio('sounds/C-1.mp3');
      audio_b.play();
      }


//specials !@#%$&%^*


if (key == "!") {
  $("body").append('<div class="wrapper"><div class="letter">!</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

if (key == "@") {
  $("body").append('<div class="wrapper"><div class="letter">@</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

if (key == "#") {
  $("body").append('<div class="wrapper"><div class="letter">#</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

 if (key == "$") {
  $("body").append('<div class="wrapper"><div class="letter">$</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

if (key == "%") {
  $("body").append('<div class="wrapper"><div class="letter">%</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

if (key == "^") {
  $("body").append('<div class="wrapper"><div class="letter">^</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }
   
if (key == "&") {
  $("body").append('<div class="wrapper"><div class="letter">&</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

if (key == "*") {
  $("body").append('<div class="wrapper"><div class="letter">*</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

if (key == "(") {
  $("body").append('<div class="wrapper"><div class="letter">(</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

 if (key == ")") {
  $("body").append('<div class="wrapper"><div class="letter">)</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

if (key == "-") {
  $("body").append('<div class="wrapper"><div class="letter">-</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

if (key == "_") {
  $("body").append('<div class="wrapper"><div class="letter">_</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

 if (key == "+") {
  $("body").append('<div class="wrapper"><div class="letter">+</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

 if (key == "=") {
  $("body").append('<div class="wrapper"><div class="letter">=</div><div class="cover"></div></div>');
  var audio_b = new Audio('sounds/C-1.mp3');
  audio_b.play();
  }

//etc

  if (key == "Enter") {
    $("body").append("<br>");
  }

  if (key == " ") {
    $("body").append('<span> </span>');
  }

  if (key == "Backspace") {
    $('body .wrapper').last().remove();
  }


});


// var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

// var round_trip_speed = connection.rtt;

// if (rtt < 50) {
//   $('body').css("font-family", "Signal_slow");
// } else if ((rtt > 50) && (rtt < 100)){
//   $('body').css("font-family", "Signal_regular");
// }


//ㅁ메모
//if 두가지를 다 적용하룻있나요?
//예를들면... if 신호강도가 이거면 이서체, 이거면 이서체.. + if 내가 어떤 버튼을 클릭하면 이서체, 다른버튼을 클릭하면 이 서체 


