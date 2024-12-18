 //document.write(`
   // <p> 2 x 0 = 0</p>
   // <p> 2 x 1 = 2</p>
   // <p> 2 x 2 = 4 </p>
   // <p> 2 x 3 = 6</p>
   // <p> 2 x 4 = 8</p>
    //<p> 2 x 5 = 10 </p>
   // <p> 2 x 6 = 12</p>
  //  <p> 2 x 7 = 14</p>
   // <p> 2 x 8 = 16 </p>
 //   `);

for(let i=0;i<=10; i+=1){
    document.write(`<p>${i}</p>`)
}
function multiTable(){

    let num = prompt("Enter the table number");
    let result = 0;
    document.write(`<h1> Table of ${num} </h1>`);
    for(let i=0;i<=10; i+=1){
        result = num * i;
        document.write(`<p>${num} x ${i} = ${result} </p>`);
}
}
//array
let students = [ "Vonde","Derrick","Tom","Brandon", "christ","Ant","Eduardo", "nick", "Christ"];
let ages = [ 32, 33,45,23,20,30,40,28,22]

//display on the console
console.table(students);
console.table(ages)

//change info
students[5] = "Ant tony";
console.table(students);
ages[8] = 20
console.table(ages)

for(let i=0;i<9;i++){
  document.getElementById("students").innerHTML+=`<li> ${i+1}-${students[i]} -${ages[i]}</li>`;
}

