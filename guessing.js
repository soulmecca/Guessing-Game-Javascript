// Game Start !! // 
 

 ranNo=0; //random number
 arr = [];
 cnt=1;// counter


 function init(){ //난수를 생성하는 함수
  ranNo = Math.floor((Math.random()*100) + 1);
  document.getElementById("message").innerHTML= "Let's have some fun!";
  document.getElementById("message").style.color = "green"; 
  document.getElementById("remain").innerHTML = "You have 4 chances left"
  cnt=1;
  document.f.t0.value = "";
  arr = [];
 }

function tries() { 
 	var val = document.f.t0.value;
  if(cnt > 4) {
              alert("Please start again");
            }
  else {
  if (val === "") {
    alert("Please input a number that you are guessing");
    document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
  }

  else {
    if (isNaN(Number(val)) === true) {
      alert("Please input a number not a string")
      document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"    
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
          document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
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
  document.f.t0.select();
  cnt++;
}

    
  }
 

function checkUp() {
 
          if (cnt <= 3) {
            if(ranNo-arr[arr.length-1] < 0 && ranNo-arr[arr.length-1] >= -5){
              document.getElementById("message").innerHTML= "You are pretty Hot, lower the number!"
              document.getElementById("message").style.color = "#FF6600";
              document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            } 
            else if(ranNo-arr[arr.length-1] < -5 && ranNo-arr[arr.length-1] >= -10){
             document.getElementById("message").innerHTML= "You are Hot, lower the number!"
             document.getElementById("message").style.color = "#FF99CC";
             document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
             }
            else if(ranNo-arr[arr.length-1] < -10 && ranNo-arr[arr.length-1] >= -20){
             document.getElementById("message").innerHTML= "You are warm, lower the number!"
             document.getElementById("message").style.color = "#FF9966";
             document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            } 
            else if(ranNo-arr[arr.length-1] < -20 && ranNo-arr[arr.length-1] >= -70){
             document.getElementById("message").innerHTML= "You are cold, lower the number!"
             document.getElementById("message").style.color = "#0066FF";
             document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            }
            else if(ranNo-arr[arr.length-1] < -70 && ranNo-arr[arr.length-1] >= -99){
             document.getElementById("message").innerHTML= "You are Ice Cold, lower the number!"
             document.getElementById("message").style.color = "#000066";
             document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            }
            else if(ranNo-arr[arr.length-1] > 0 && ranNo-arr[arr.length-1] <= 5){
              document.getElementById("message").innerHTML= "You are pretty Hot, increase the number!"
              document.getElementById("message").style.color = "#FF6600";
              document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            } 
            else if(ranNo-arr[arr.length-1] > 5 && ranNo-arr[arr.length-1] <= 10){
              document.getElementById("message").innerHTML= "You are Hot, increase the number!"
              document.getElementById("message").style.color = "#FF99CC";
              document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            }
            else if(ranNo-arr[arr.length-1] > 10 && ranNo-arr[arr.length-1] <= 20){
              document.getElementById("message").innerHTML= "You are warm, increase the number!"
              document.getElementById("message").style.color = "#FF9966";
              document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            } 
            else if(ranNo-arr[arr.length-1] > 20 && ranNo-arr[arr.length-1] <= 70){
              document.getElementById("message").innerHTML= "You are cold, increase the number!"
              document.getElementById("message").style.color = "#0066FF";
              document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            }
            else if(ranNo-arr[arr.length-1] > 70 && ranNo-arr[arr.length-1] <= 99){
              document.getElementById("message").innerHTML= "You are Ice Cold, increase the number!"
              document.getElementById("message").style.color = "#000066";
              document.getElementById("remain").innerHTML = "You have " + (4 - cnt) + " more chances left"
            }
            else {
              document.getElementById("message").innerHTML= "You've got the number !! Good Job!!"
              document.getElementById("message").style.color = "#339933";
            }
           }
           else if(cnt === 4) {
            document.getElementById("remain").innerHTML = "Last Chance!!!"
            if(arr[arr.length-1] === ranNo) {
              document.getElementById("message").innerHTML= "You've got the number !! Good Job!!"
              document.getElementById("message").style.color = "#339933";
            }
            else {
             document.getElementById("message").innerHTML = "You have no chance, please start again"
             document.getElementById("remain").innerHTML = "Start again";
            }
           }
}

function hint(){
  document.getElementById("message").innerHTML = "The number is " + ranNo;
  document.getElementById("remain").innerHTML = "You have no chance left, Start again";
  cnt = 5;

}


 $("form").keypress(function(e) {
  //Enter key
  if (e.which == 13) {
    return false;
  }
  });

  


