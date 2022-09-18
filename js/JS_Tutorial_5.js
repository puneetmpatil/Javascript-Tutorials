// ! Type Conversion
console.log("Welcome to Tutorial 5")
let myVar = String(34);
console.log(myVar,typeof myVar)
let booleanVar = String(true);
console.log(booleanVar,typeof booleanVar)

let date = String(new Date());
console.log(date,typeof date)

let arr = String([1,2,3,4,5])
console.log(arr.length,typeof arr)

let i = 75;
console.log(i.toString())

let stri = Number("3434")
stri = Number("34d34")
console.log(stri,typeof stri)
stri = Number(false)
console.log(stri,typeof stri)
stri = Number([1,2,3,4,5,6,7,8,9])
console.log(stri,typeof stri)


let number = parseInt('34.098')
console.log(number,typeof number)
number = parseFloat('34.098')
console.log(number.toFixed(2),typeof number)

// ! Coercion
let myStr = "698"
let myNum = 34;
console.log(myStr+myNum)