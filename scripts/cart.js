//global vars
let cart=[];
let prodID=0;
function addProduct(){
    let product = document.getElementById("txtProduct").value;//get the value
    cart.push(product);//adding the product into the array
    displayCart(product);//display the value into the HTML
    document.getElementById("txtProduct").value = "";//clearing the input
    updateNumberProducts();
}

function displayCart(newProduct){
    
    let item = `<li id="${prodID}"> ${newProduct} <span onclick="deleteProd(${prodID})">🗑️</span></li>`;//creating the html tmp
    const ul = document.getElementById("productsList"); // getting the html element
    ul.innerHTML+=item; // adding the item to the html
    prodID++;
}

function updateNumberProducts(){
    document.getElementById("amountProducts").innerHTML=cart.length;
}

function deleteProd(id){
    document.getElementById(id).remove();
    cart.pop();
    updateNumberProducts();
}
function init(){
    console.log("Init");
    updateNumberProducts();
}

window.onload=init;//wait to render the html
