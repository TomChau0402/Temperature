console.log("Temperature from Celsius to Fahrenheit");


function convertTemperatureRange() {
    let startValue=prompt(" starting temperture");
    let endValue=prompt(" ending temperture")
    let scale =prompt(" F for Fehrenheit or C for Celsius");}

   
    for (let i = startValue; i<=endValue; i++) 
        
        if (scale== "F") {
            let celsius = (i -32)* 5/9;
            console.log(celsius+ " Celsius")
            document.getElementById("temperture").innerHTML+= `${i} is what the temperature from Fehrenheit to ${celsius.toFixed(2)} celsius <br>`;
    
         } else {
            let fehrenheit = (i *9/5) + 32;
            console.log( fehrenheit + " Fehrenheit")
           document.getElementById("temperture").innerHTML+= `${i}is what the temperature from Celsius to ${fehrenheit.tofixed(2)} Fehrenheit <br>`;}
            
         