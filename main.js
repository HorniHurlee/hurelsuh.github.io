var input = prompt("Enter Number"); 
var cp = input.split('').reverse().join(''); 
var output = document.getElementById("output"); 
    if (input == cp) { 
        output.innerHTML = `${input} is a palindrome`; 
    } 
    else { 
        output.innerHTML = `${input} is not a palindrome`;
    }
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