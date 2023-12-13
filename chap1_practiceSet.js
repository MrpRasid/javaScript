let a = "Mamun";
let b = 6;
console.log(a+b);
console.log(typeof(a+b));

// object in js

    // constant object

const mrp = {
    name: "Mamun",
    branch: "Cse",
    language: "JavaScript"
}
    //modify of the object element is not possible in const

    // adding new key in the object 
 mrp['firend'] = "Nothing";
 mrp['aNum'] = 5;
console.log(mrp);
//using .Name also work
console.log(mrp.name);
// or using "Name" also work
console.log(mrp["name"]);
