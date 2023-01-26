// function greet(name){
//     return "Hello " + name + "!";
// } 
let promptName = prompt("Enter your name");

let greet = function(name) // expression
{
    return "<p>Welcome " + name + "!</p>";
}

document.write(greet(promptName));  

function sum(a,b){ //declaration
    return a+b;
}

console.log(sum(2,5));

//challenge: Define a function called multiplyThree which accepts a number and returns that number multiplied by 3.

function multiplyThree(number){
    let total = number*3;
    document.write(`
    <p>${number} x 3 = ${total}</p>
    `);
    return number*3;
}

multiplyThree(5);
multiplyThree(6);



