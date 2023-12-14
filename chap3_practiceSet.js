// problem first is print student marks using for loop

    // object 
let marks = {
    mrp: 90,
    safiur: 85,
    samim: 30,
    sartaj: 25

}
//using for loop
 for ( let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
 }                                                                                                                              

 //Q2 use for in loop

 for(let key in marks){
    console.log("The marks of "+ key+" are "+marks[key])
}

//mean using function

const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}

console.log(mean(1,2,5,7))