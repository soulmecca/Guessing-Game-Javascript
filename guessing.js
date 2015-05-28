// Game Start !! // 
 

 ranNo = 0; //random number
 arr = []; // tracking used numbers
 cnt = 1;// counter


 function init(){ 
  ranNo = Math.floor((Math.random()*100) + 1);
  $("#message").html("Let's have some fun!") ;
  $("#message").css('color', 'green');
  $("#remain").html("You have 4 chances left");
  cnt=1;
  $("input[name='t0']").val("");
  arr = [];
 }

function tries() { 
 	//var val = document.f.t0.value;
  var val = $("input[name='t0']").val();

  if(cnt > 4) {
              alert("Please start again");
            }
  else {
    if (val === "") {
      alert("Please input a number that you are guessing");
      $("#remain").html("You have " + (4 - cnt) + " more chances left")
    }

    else {
      if (isNaN(Number(val)) === true) {
       alert("Please input a number not a string")
       $("#remain").html("You have " + (4 - cnt) + " more chances left")    
       }
      else {
        if (arr[0] === undefined) {
        arr.push(Number(val));
        checkUp();
        }
        else {
          for (var key in arr) {
            if(arr[key] === Number(val)) {
              alert("Oops, you already tried that number");
              $("#remain").html("You have " + (4 - cnt) + " more chances left");
              if (cnt === 4) {
              checkUp();
              }
            }
            else {
              arr.push(Number(val));
              checkUp();
            }
          }
        }  
      }  
    }
  //document.f.t0.select();
  cnt++;
  }
  }
 

function checkUp() {
  var whatIsId = "";
          if (cnt <= 3) {
            if(ranNo-arr[arr.length-1] < 0 && ranNo-arr[arr.length-1] >= -5){
              $("#message").html("You are pretty Hot, lower the number!");
              $("#message").css('color', 'red');
              $("#remain").html((4 - cnt) + " chances left");
              whatIsId = "col5";
            } 
            else if(ranNo-arr[arr.length-1] < -5 && ranNo-arr[arr.length-1] >= -10){
             $("#message").html("You are Hot, lower the number!");
             $("#message").css('color', '#f65538');
             $("#remain").html((4 - cnt) + " chances left");
             whatIsId = "col4";
             }
            else if(ranNo-arr[arr.length-1] < -10 && ranNo-arr[arr.length-1] >= -20){
             $("#message").html("You are warm, lower the number!");
             $("#message").css('color', '#f98181');
             $("#remain").html((4 - cnt) + " chances left");
             whatIsId = "col3";
            } 
            else if(ranNo-arr[arr.length-1] < -20 && ranNo-arr[arr.length-1] >= -70){
             $("#message").html("You are cold, lower the number!");
             $("#message").css('color', '#2cadfb');
             $("#remain").html((4 - cnt) + " chances left");
             whatIsId = "col2";
            }
            else if(ranNo-arr[arr.length-1] < -70 && ranNo-arr[arr.length-1] >= -99){
              $("#message").html("You are Ice Cold, lower the number!");
              $("#message").css('color', '#19328d'); 
              $("#remain").html((4 - cnt) + " chances left");
              whatIsId = "col1";
            }
            else if(ranNo-arr[arr.length-1] > 0 && ranNo-arr[arr.length-1] <= 5){
              $("#message").html("You are pretty Hot, increase the number!");
              $("#message").css('color','red');
              $("#remain").html((4 - cnt) + " chances left");
              whatIsId = "col6";
            } 
            else if(ranNo-arr[arr.length-1] > 5 && ranNo-arr[arr.length-1] <= 10){
              $("#message").html("You are Hot, increase the number!");
              $("#message").css('color','#f65538');
              $("#remain").html((4 - cnt) + " chances left");
              whatIsId = "col7";
            }
            else if(ranNo-arr[arr.length-1] > 10 && ranNo-arr[arr.length-1] <= 20){
              $("#message").html("You are warm, increase the number!");
              $("#message").css('color','#f98181');
              $("#remain").html((4 - cnt) + " chances left");
              whatIsId = "col8";
            } 
            else if(ranNo-arr[arr.length-1] > 20 && ranNo-arr[arr.length-1] <= 70){
              $("#message").html("You are cold, increase the number!");
              $("#message").css('color','#2cadfb');
              $("#remain").html((4 - cnt) + " chances left");
              whatIsId = "col9";
            }
            else if(ranNo-arr[arr.length-1] > 70 && ranNo-arr[arr.length-1] <= 99){
              $("#message").html("You are Ice Cold, increase the number!");
              $("#message").css('color','#19328d');
              $("#remain").html((4 - cnt) + " chances left");
              whatIsId = "col10";
            }
            else {
              $("#message").html("You've got the number !! Good Job!!");
              $("#message").css('color','#339933');
              $overlay.show();
            }
           }
           else if(cnt === 4) {
            $("#remain").html("Last Chance!!!");
            if(arr[arr.length-1] === ranNo) {
               $overlay.show();
              $("#message").html("You've got the number !! Good Job!!");
              $("#message").css('color','#339933');
              $overlay.show();
              
            }
            else {
             $("#message").html("You have no chance, please start again").css('color', 'black');
             $("#remain").html("Start again");
            }
           }
  $("#"+whatIsId).focus();
}

function hint(){
  $("#message").html("The number is " + ranNo);
  $("#remain").html("You have no chance left, Start again");
  cnt = 5;

}

var $overlay = $('<div id = "overlay"></div>')
var $image = $('<img alt="" src="http://www.reactiongifs.com/r/cheering_minions.gif"/>');

$overlay.append($image);
$("body").append($overlay);

$overlay.click(function(){
  $overlay.hide();
});

 $("form").keypress(function(e) {
  //Enter key
  if (e.which == 13) {
    return false;
  }
  });

  


