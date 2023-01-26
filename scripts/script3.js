function addStudent(){
    let userName = prompt("Enter student name");
    let fsdi101 = Number(prompt(" Enter the fsdi 101 grade"));
    let fsdi102 = Number(prompt(" Enter the fsdi 102 grade"));
    let gpa = (fsdi101+fsdi102)/2;//calculation 
    document.getElementById("text").innerHTML+=`
    <h5>Welcome ${userName}</h5>
    <p>Name: ${userName} </p>
    <p>GPA: ${gpa}</p>
    `;
}



