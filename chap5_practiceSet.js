// let num =[1,23,3,4,6,7,9]
// console.log(num.length)
// delete num[0]
// console.log(num.length)
// console.log(num[0])

// Q1 User input in an array
let array =[3,4,5,6]
array.push(9)
console.log(array)

// Q3 take input untill get 0

let arr = [10,23,45,50,340,12]
let a = arr.filter((x)=>{
    return x%10==0
})
console.log(a)

// Q4 square of the array element
let ary = [5,6,7,8,12]
let b = ary.map((x)=>{
    return x*x
})

console.log(b)


// Q5 factorial using reduce from array natural number


    let nums = [1,2,3,4,5]

    let c = nums.reduce((x1,x2)=>{
        return x1*x2
    })

    console.log(c)