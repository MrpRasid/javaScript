const prompt = require("prompt-sync")( );
//q1

let age = prompt("what is your age?");
if(age>10 && age<=20){
    console.log("Your age lies between 10 and 20");
}else{
    console.log("your age is not lies between 10 and 20")
}

// Q6

// using ternary operator if age >18 then you can drive 

// let ag = 12;

let a = age > 18 ? "You can drive": "You Can't drive"

console.log(a);