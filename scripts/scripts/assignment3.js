console.log("Temperature from Celsius to Fahrenheit");

//let temperature =prompt("Please enter temperture");
// Got help from Tutor

function convertTemperature() {
    let temp=prompt("Enter the temperature");
    let scale =prompt(" F for Fehrenheit or C for Celsius");
   
    if (scale== "F") {
        let celsius = (temp -32)* 5/9;
        console.log(celsius+ " Celsius")
        document.getElementById("temperture").innerHTML+=celsius;

     } else {
        let fehrenheit = (temp *9/5) + 32;
        console.log( fehrenheit + " Fehrenheit")
       document.getElementById("temperture").innerHTML+=fehrenheit;
        
     }
}
convertTemperature();



