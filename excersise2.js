//This is a Gun Snake and Water Game

let num = Math.floor((Math.random()*3))

const prompt = require("prompt-sync")( );
 let   ent = prompt("Enter The S,G,W to play the game: ");
//    1 = snake 
//    2 = gun 
//    3 = water 

let cpu= ["S","G","W"][num]

const match = (cpu,ent)=>{
    if(cpu===ent){
        return "Nobody. Match is draw"
    }
    else if(cpu==="S" && ent==="G"){
        return "User"
    }
     else if(cpu==="S" && ent==="W"){
        return "CPU"
    }
    else if(cpu==="W" && ent==="S"){
        return "User"
    }
    else if(cpu==="W" && ent==="G"){
        return "CPU"
    }
    else if(cpu==="G" && ent==="W"){
        return "User"
    }
    else if(cpu==="G" && ent==="S"){
        return "CPU"
    }
}

let result =match(cpu,ent)
console.log(`User:${ent} and Cpu:${cpu} \n The winner is: ${result}`)


