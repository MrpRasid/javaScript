
let x = Math.floor((Math.random()*100)+1)
let count =0
let num
let y



do{
    const prompt = require("prompt-sync")( );
    num = prompt("Enter a number between 1 to 100: ");
     y = parseInt(num)

    if(y===x){
        console.log("get the number ")
    }else if(y>x){
        console.log("y is greater then x ")
    } else if(y<x){
        console.log("y is less then x")
    }

    count++

} while(y != x)

console.log("number of attempt is: "+ count)