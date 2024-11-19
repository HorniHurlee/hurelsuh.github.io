//1
const input = prompt("Enter Number"); 
var output = document.getElementById("output")
function findFactorial(n){
    if(n === 0){
        return 1;
    }
    return n * findFactorial(n - 1);
}
output.innerHTML = `${findFactorial(input)}`;


// 2
var output2 = document.getElementById("output2");
var timer = 31;
function timerCountdown(){
    if(timer > 0){
        timer--;
        output2.innerHTML = `${timer} seconds remaining`;
    }
    else{
        clearInterval(countdown);
        output2.innerHTML = `Time is up`;
    }
}
const countdown = setInterval(timerCountdown, 1000);

var output3 = document.getElementById("output3");

function incrementLoginCount() {
    let loginCount = localStorage.getItem('Incremental_Value');
    if (loginCount) {
      loginCount = parseInt(loginCount) + 1;
    } else {
      loginCount = 1;
    }
    localStorage.setItem('Incremental_Value', loginCount);
    output3.innerHTML = `${loginCount} of times you logged in`
  }
incrementLoginCount();
  