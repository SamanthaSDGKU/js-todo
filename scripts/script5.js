let myArray = ["string", 10, {}];
let cart=["speakers","laptop","keyboard"];

console.table(myArray[1]);
console.table(cart[2]);

// You must define an array with the following three variables:

// 1. A string which has the value of "What is the meaning of life?"
// 2. A number which has a value of 42
// 3. A boolean which has a value of true
let arrayExample = ["What is the meaning of life?",42,true,50,100,66,54,32,12];
console.log(arrayExample);

for(let i=0;i<arrayExample.length;i++){
    document.write(`<p>${arrayExample[i]}</p>`);
}

const numbers=[10,20,30,40,50];
console.table(numbers);

const months=["Jan","Feb","Mar","Apr", "May"];
console.table(months);

//access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Array dimension
console.log(numbers.length); 
//use a for a loop for displaying the arrays of numbers and months

for(let j=0;j<numbers.length;j++){
    document.write(`<li>${numbers[j]}</li>`);
    document.write(`<li>${months[j]}</li>`);
}

let i=0;
while (i < 20){
	console.log(i + "bottles of beet on the wall");
	i +=1;
}


