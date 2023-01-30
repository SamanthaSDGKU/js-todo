function calculator(){
    console.log("Caluculating");
    //1) get the values from the prompt
    let num1 = Number(prompt("Enter the number 1: "));
    let num2 = Number(prompt("Enter the number 2: "));
    console.log(num1,num2);
    
    // do the sum
    sum(num1,num2);
    //display the results in the results zone
}

function sum(a,b){
    document.getElementById("results").innerHTML= `<p> ${a} + ${b} = ${a+b} </p>`;
}


