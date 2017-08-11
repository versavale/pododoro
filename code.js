$(document).ready(function(){

  var timeT = 25;
  var breakB = 5;
  var pause = false;
  var count;
  var minutes= 25;
  var seconds= 0;

  //add minutes to time
   $(".timePlus").click(function() {
  timeT++;
     $(".timeDisplay").text(timeT + ":00");
     $(".timeNum").text(timeT);
});
  //subtract minutes to time
     $(".timeMinus").click(function() {
  timeT--;

     $(".timeDisplay").text(timeT + ":00");
     $(".timeNum").text(timeT);
});
  //add minutes to break
     $(".breakPlus").click(function() {
  breakB++;
     $(".breakDisplay").text(breakB + ":00");
     $(".breakNum").text(breakB);
});
  //subtract minutes to break
     $(".breakMinus").click(function() {
  breakB--;
     $(".breakDisplay").text(breakB + ":00");
     $(".breakNum").text(breakB);
});

  //Countdown

$(".start").click(function() {
  document.getElementById('timer').innerHTML =
  timeT + ":" + "00";
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var min = timeArray[0];
  var sec = checkSecond((timeArray[1] - 1));
  if(sec == 59) {
    min = min -1;
  }
  document.getElementById('timer').innerHTML =
    min + ":" + sec;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
});
//toggle between #timeDisplay and #breakDisplay
  $('.breakDisplay').hide();

$('.breakDisplay, .timeDisplay').on('click',function() {
    $('.breakDisplay, .timeDisplay').toggle();
  });

  //end **DO NOT DELETE**
});
