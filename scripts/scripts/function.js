console.log("function.js")

//creating the function
function greet(name){
    return "Hello World from a Function!" + name
}
console.log(greet("Tom"))
// Anonymous funcitons
let greetTwo = function (name){
    return "hello World from an Anonymous Funciton! and hello" + name;
}
console.log(greetTwo(Tom))

//create a function with many parameters
function greetThree(name, place){
    return "hello" + name + "from" + place
}
console.log(greetThree("Tom", "school"))

function multiplyThree(num) {
    return num* 3;
}
console.log(multiplyThree(4));   //12
console.log(multiplyThree(3)) //9
console.log(multiplyThree(5)) //15

//challenge
function combineName(firstName,secondName){
    return firstName +"" + secondName}
    console.log(combineName("Luis", "Alan"))
    function sum(sum1, sum2) {
        return sum1 + sum;
    }
let Result= sum(5,10);
console.log("the result of the sum is : "+ Result)
   
//prompts
let productName = prompt("enter the product name:");
let productPrice = number(prompt("Enter the price:"))
console.log(productName)
console.log(productPrice)
console.log(sum(2,productPrice));
function addCart(price){
    let total = 0;
    total =total+ price;
    return total;
}
total = addCart(productPrice);
function calcuateTaxes(total) {
    return 1.11 * total;
}
console.log("the total is:" + calcuateTaxes(total))
document.write("<p>" +productName +"" + calcuateTaxes(total). toFixed(2) + "<p>")

//mini challenge
let num1 = Number(prompt("enter the first value:"))
let num2 = Number(prompt("enter the second value:"))
let total = 0
function substracton(num1, nums) {
    total = num1-num2;
    console.log("the result of subtracting")
}

//linking a function to a button
function addProduct() {
    let prodName =prompt("enter the product name:")
    document.getElementById("list").innerHTML +=`<p>${prodName}</p>`;
}
