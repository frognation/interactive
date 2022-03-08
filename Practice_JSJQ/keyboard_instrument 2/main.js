// this is where you write your javascript

$(window).keydown(function (key_press_event) {
  var key = key_press_event.key;

  console.log(key);

  if (key == "a") {
    $(".message").html("Apple");
    $("body").toggleClass("bg_blue");

    $(".bg_dog").toggleClass("bg_cat");
  } else if (key == "b") {
    $(".message").html("Bagpipes");
  } else if (key == "c") {
    $(".message").html("Cadillac");
  } else if (key == "d") {
    $(".message").html("dead");
  } else if (key == "o") {
    $("img").toggle();
  }
});
