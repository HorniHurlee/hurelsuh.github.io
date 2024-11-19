var tempNumber = 0;
var placeHolder = 0;
var x = 0;
var output = document.getElementById("output");
var input = prompt("Enter Number"); 
input = parseInt(input);
while(input > 10){
    placeHolder = placeHolder + (input % 10);
    input = parseInt(input / 10);
}
placeHolder = placeHolder + (input % 10);
tempNumber = placeHolder;
var reversedNum = 0;

while(tempNumber != 0){
    x = tempNumber % 10;
    reversedNum = (reversedNum * 10) + x;
    tempNumber = parseInt(tempNumber / 10);
}
if (placeHolder == reversedNum){
    output.innerHTML = `${placeHolder} is a palindrome`; 
}
else{
    output.innerHTML = `${placeHolder} is not a palindrome`;
}


// var numbers = [1, 2, 3, 4, 5];
// var i = 0;
// var max = 0;
// var output = document.getElementById("output");
// while (i <= 1){
//     if(max < numbers[i]){
//         max = numbers[i];
//     }
//     i++;
// }
// var temp = 1;
// while(true){
//     if((max % numbers[0] == 0) && (max % numbers[1] == 0) && (max % numbers[2] == 0) && (max % numbers[3] == 0) && (max % numbers[4] == 0)){
//         output.innerHTML = `${max} is the LCM`;
//         break;
//     }

//     else{
//         max += 1;
//     }
//     console.log(max);
// }






// var output = document.getElementById("output"); 
//     if (input == cp) { 
//         output.innerHTML = `${input} is a palindrome`; 
//     } 
//     else { 
//         output.innerHTML = `${input} is not a palindrome`;
//     }
/*
var output2 = document.getElementById("output2");
var rabbit = 18;
rabbit = parseInt(rabbit);
var wolf = 25;
wolf = parseInt(wolf);
input = prompt("Enter headstart distance");
input = parseFloat(input);
var diff = wolf - rabbit;
var seconds = input / diff;
output2.innerHTML = `${seconds} seconds it'll take for that motherfucker to reach`;



var apartmentNumber = prompt("Enter the apartment number:");
apartmentNumber = parseInt(apartmentNumber); 

function findApartmentDetails(apartmentNum) {
    const totalFloors = 9;
    const apartmentsPerFloor = 4;
    const totalApartments = totalFloors * apartmentsPerFloor;

    if (apartmentNum < 1 || apartmentNum > totalApartments) {
        return "Invalid apartment number!";
    }

    const floor = Math.ceil(apartmentNum / apartmentsPerFloor);
    const apartmentOnFloor = ((apartmentNum - 1) % apartmentsPerFloor) + 1;

    return `Floor: ${floor}, No: ${apartmentOnFloor}`;
}

const apartmentResult = findApartmentDetails(apartmentNumber);
const output3 = document.getElementById("output3");
output3.innerHTML = apartmentResult;

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function gcdcalc(arr) {
    return arr.reduce((acc, curr) => gcd(acc, curr));
}

var numbers = [24, 36, 60, 48, 18]; 
var result = gcdcalc(numbers);
output4.innerHTML = `Greatest Comon Divisor: ${result}`;



const currentHour = new Date().getHours();
var input = prompt("Enter desired numbuh");
input = parseFloat(input);
const output5 = document.getElementById("output5");

if (currentHour > 9 && currentHour < 21){
    input = Math.pow(input, 2);
    output5.innerHTML = `Daytime. ${input}`;
}
else{
    input = Math.sqrt(input);
    output5.innerHTML = `Nighttime. ${input}`;
}
    */