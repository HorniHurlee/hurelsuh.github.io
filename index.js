var total = 0;
var ctr;
ctr = 1;
var grade = 0;
grade = window.prompt("Enter Grade");
let temp = parseFloat(grade);

while(temp !== -1){
    total = total + temp;
    ctr = ctr + 1;
    grade = window.prompt("Enter Grade");
    let temp = parseFloat(grade);

}
grade = total / 10;
document.write("Average grade:", + grade);