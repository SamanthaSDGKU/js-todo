console.log("Scripts");
var user = "Luis"; //string
var gpa = 3.2; // number
var isActive = true; //boolean

//document.write('<p class="text"> Name: '+ user + '</p><p> Student:' + isActive +'</p><p> GPA:' + gpa + '</p>');

document.write(
    `
    <p class="text">Name: ${user} </p>
    <p class="text">Student: ${isActive} </p>
    <p class="text">GPA: ${gpa*2} </p>
    `);

let userName; // initialization
userName="Aaron"; // assignation
let userEmail = "someone@gmail.com";
let salaryMonthly = 10000;
const m = 12; // const doesnt change
//let yearlySalary = salaryMonthly*m;
userName="Leah";


document.write(`
    <p>Name: ${userName} </p>
    <p>Email: ${userEmail} </p>
    <p>Salary: ${salaryMonthly*m}</p>
`)