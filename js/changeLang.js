$(document).ready(function () {
// $(".en").css({"display":"none"});

  $(".lang > a").on("click", function () {
    $(".active").toggleClass("active");
    $(this).addClass("active");
  });

  $("#english").on("click", function (){
    $(".en").css({"display":"block"});
    $(".ch").css({"display":"none"});
});

$("#chinese").on("click", function (){
    $(".en").css({"display":"none"});
    $(".ch").css({"display":"block"});
});



  
  







});
