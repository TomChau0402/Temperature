console.log("if-statement");

//---if statement---
// if(condition){
// code to be executed if the conditiions is true
// }

if(3<=5){
    console.log("i am inside the if statement")
}
let student1=45
let student2=45
if(student1==student2){
    console.log("both are the same")
}

//-----if else statement -----
//if(condiotn){
//  } else {
// code to be executed if the condition is false}

let isTrue=true;
if(isTrue){
    console.log("yes");
    }else{
        console.log("no")
    }

let age= 50
if (age=>21) {
console.log("you are an adult")
    } else{
        console.log("you are underage")
    }
    //----if else if else statement----
    // if(conditon){
    // code to be executed if condtion is true} 
    // else if(condition2){
    // code to be executed if conditon2 is true}
    //} else{
    //code to be executed if conditions are flase}

    age= 7
    if(age,13){
        console.log("child")
    } else if(age<21){
        console.log("teenage")
    } else if (age<64){
        console.log("Senior")
    }

    age= 15
    if(age<13){
        console.log("ticket cost is $5")
    } else if(age=12-18){
        console.log("ticket cost is $8")
    } else if (age<18){
        console.log("ticket cost is $10")}
function ticketCalculator() {
    let age=prompt("Enter the age");
    let price;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    } else{
        price=10}

    console.log("your ticket price is: $" + price)
    

        Temperture= 15
        if(age<15){
            console.log(" suggest wearigna jacket")
        } else if(age=12-18){
            console.log("suggest a sweater")
        } else if (age<18){
            console.log("suggest wearing a T-shirt")}
    function weatherOutfit() {
        let tmp=prompt("Enter the temperature")
        document.getElementById("weather").classList.remove("cold","hot");
        let outfit;
        if (tmp<15) {
            outfit="jacket";
            document.getElementById("weather").classList.remove("cold"); 
        } else if(tmp<25)
        
    }
