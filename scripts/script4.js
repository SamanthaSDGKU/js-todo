// let yourName="Samantha";
// if(confirm("Are you "+ yourName + "?")){
// 	document.write("<h3>Hello " + yourName + " </h3>");
// }else{
// 	console.log("<p>Then what is your name?</p>");
// }

// let number = 98;
// if(number == 99){
// 	console.log("The number is correct");
// }else{
//     console.log("It's not");
// }

// let num1 = 10;
// let num2 = 2;

// if(num1 < num2){
// 	console.log("num1 is smaller than num2");
// }

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let notTrue = false;

// if(num1<num2 && num3>num2){
// 	console.log("num1 is smaller than num2 AND num3 is larger than num2");
// }

// if(num1 == 1 || num2 == 1 || num3 == 1){
// 	console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
// }

// if(!notTrue){
// 	console.log("not not true is true!");
// }

// loops
// for (start ; stop ; increment)
let products = [];//arrays
function displayNumbers(){
    for(let i=0;i<101;i+=10){
        document.write(`<li>${i}</li>`);
    }
}


//switch
let op = prompt("Enter your option:");
switch(op){
    case '1':
        displayNumbers();
        break;
    case '2':
        console.log("Option 2");
        break;
    default:
        alert('Sorry, this is not an option');
        break;
}