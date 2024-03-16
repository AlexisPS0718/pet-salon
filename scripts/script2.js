/* jQuery examples */
$("h1").click(function () {
  $("#pc-cat img").toggle();
  $("header").css("background-color", "#ffcc00");
  $("header").css("color", "black");
  $("header a").css("color", "white");
  $("header .flex-space-between a").css("color", "black");
  $(".btn").css("border", "none");
});

$(".main-text").click(function () {
  $("#pc-cat img").show();
  $("header").css("background-color", "red");
});

$("#dark-mode").click(function () {
  $("header").toggleClass("header-black");
  $("header a").toggleClass("color-white");
  $(".btn").toggleClass("btn-white");

  if ($(this).text() == "Dark mode") {
    $(this).text("Light mode")
  } else {
    $(this).text("Dark mode");
  }
});
