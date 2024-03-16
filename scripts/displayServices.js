$(document).ready(function () {
  $("#bath").hide();
  $("#haircut").hide();
  $("#brushing").hide();
  $("#nail-trim").hide();
});

$("#services li:nth-child(1)").click(function () {
  $(this).toggleClass("clicked");
  $("#services li:nth-child(2)").removeClass("clicked");
  $("#services li:nth-child(3)").removeClass("clicked");
  $("#services li:nth-child(4)").removeClass("clicked");

  $("#bath").toggle();
  $("#haircut").hide();
  $("#brushing").hide();
  $("#nail-trim").hide();
});

$("#services li:nth-child(2)").click(function () {
  $("#services li:nth-child(1)").removeClass("clicked");
  $(this).toggleClass("clicked");
  $("#services li:nth-child(3)").removeClass("clicked");
  $("#services li:nth-child(4)").removeClass("clicked");

  $("#bath").hide();
  $("#haircut").toggle();
  $("#brushing").hide();
  $("#nail-trim").hide();
});

$("#services li:nth-child(3)").click(function () {
  $("#services li:nth-child(1)").removeClass("clicked");
  $("#services li:nth-child(2)").removeClass("clicked");
  $(this).toggleClass("clicked");
  $("#services li:nth-child(4)").removeClass("clicked");

  $("#bath").hide();
  $("#haircut").hide();
  $("#brushing").toggle();
  $("#nail-trim").hide();
});

$("#services li:nth-child(4)").click(function () {
  $("#services li:nth-child(1)").removeClass("clicked");
  $("#services li:nth-child(2)").removeClass("clicked");
  $("#services li:nth-child(3)").removeClass("clicked");
  $(this).toggleClass("clicked");

  $("#bath").hide();
  $("#haircut").hide();
  $("#brushing").hide();
  $("#nail-trim").toggle();
});