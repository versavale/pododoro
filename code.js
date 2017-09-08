$(document).ready(function() {
  var audio = $("audio")[0];
  $(".breakDisplay").hide();  //hide all inactive buttons on start
  $(".startinactive").hide();
  $(".pause").hide();
  $(".reset").hide();

  
  var timeT = 25; //initial time set for timer
  var breakB = 5; //initial time set for break
  var pause = true; //on page load, set pause to true to prevent countdown from starting
  var mode = true; //clock mode: timer mode if true, break mode if false
  var time; //store the time value

  
  
  //START THE COUNTDOWN
  $(".start").click(function() {
    pause = false; //as soon as countdown starts, pause sets to false
    
    $(".startinactive").show();    //active/inactive buttons on start
    $(".start").hide();
    $(".pause").show();
    $(".pauseinactive").hide();
    $(".resetinactive").show();
    $(".reset").hide();
    
    

    if (mode === true) {  //mode true = timer
      time = $(".timeDisplay");
      
      $(".timeDisplay").show(); //display the countdown for timer
      $(".breakDisplay").hide();
      $(".round").css("border", "2px solid #ff6a5c");
      
      
      
      
    } else if (mode === false) {
      time = $(".breakDisplay");
      
      $(".timeDisplay").hide(); //display the countdown for break
      $(".breakDisplay").show();
      $(".round").css("border", "2px solid #056571");
    }


    function updateTime() {   //run the countdown
      var myTime = time.html();
      var ss = myTime.split(":");
      var dt = new Date();
      dt.setHours(0);
      dt.setMinutes(ss[0]);
      dt.setSeconds(ss[1]);
      var dt2 = new Date(dt.valueOf() - 1000);
      var temp = dt2.toTimeString().split(" ");
      var ts = temp[0].split(":");
      time.html(ts[1] + ":" + ts[2]);

      
      
      if (myTime > "00:00") {  //what happens while countdown runs
        setTimeout(updateTime, 1000);
        if (myTime === "00:01") {
          //plays alert when clock hits 00:00
          audio.play();
        }
        
      } else if (myTime === "00:00") { //stop countdown when it hits 0
        clearTimeout();

        if (mode === true && myTime === "00:00") {  //toggle mode when countdown hits 0 
          mode = false;
          $(".breakDisplay").text(breakB + ":00");
        } else if (mode === false && myTime === "00:00") {
          mode = true;
          $(".timeDisplay").text(timeT + ":00");
        }
        
        
        $(".start").click(); //simulate start click to start countdown again 
      }
    }
     
    if (pause === false) {
      setTimeout(updateTime, 1000);
      document.getElementById("start").innerHTML = "Start"; //change button to start after pause
    }
    console.log(pause);

    
    
    //PAUSE THE COUNTDOWN
    $(".pause").click(function() {
      time = timeT;
      pause = true;
      document.getElementById("start").innerHTML = "Resume"; //change button to resume
      
      $(".reset").show();
      $(".resetinactive").hide();
      $(".pause").hide();
      $(".pauseinactive").show();
      $(".start").show();
      $(".startinactive").hide();
    });

    
    
    //RESET THE COUNTDOWN
    $(".reset").click(function() {
      $(".resetinactive").show();
      $(".reset").hide();
      if (mode === true && pause === true) {
        $(".timeDisplay").text(timeT + ":00");
        document.getElementById("start").innerHTML = "Start";
      } else if (mode === false && pause === true) {
        $(".breakDisplay").text(breakB + ":00");
        document.getElementById("start").innerHTML = "Start";
      }
    });
  });

  
  
  //SET YOUR OWN TIME
  //add minutes to timer
  $(".timePlus").click(function() {
    timeT++;
    $(".timeDisplay").text(timeT + ":00");
    $(".timeNum").text(timeT);
    document.getElementById("start").innerHTML = "Start";
  });
  
  //subtract minutes to timer
  $(".timeMinus").click(function() {
    timeT--;
    $(".timeMinus").prop("disabled", false);
    $(".timeDisplay").text(timeT + ":00");
    $(".timeNum").text(timeT);
    if (timeT <= 1) {
      $(".timeMinus").prop("disabled", true);
    }
    document.getElementById("start").innerHTML = "Start";
  });
  
  //add minutes to break
  $(".breakPlus").click(function() {
    breakB++;
    $(".breakDisplay").text(breakB + ":00");
    $(".breakNum").text(breakB);
    document.getElementById("start").innerHTML = "Start";
  });
  
  //subtract minutes to break
  $(".breakMinus").click(function() {
    breakB--;
    $(".breakMinus").prop("disabled", false);
    $(".breakDisplay").text(breakB + ":00");
    $(".breakNum").text(breakB);
    if (breakB <= 1) {
      $(".breakMinus").prop("disabled", true);
    }
    document.getElementById("start").innerHTML = "Start";
  });

  
});
