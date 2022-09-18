/*
Data types in JS
---> Primitive datatype (Memory allocated in stack) -> string,numbers,Boolean,Null,undefined,Symbol
---> Reference datatype (Memory allocated in heap) -> Arrays, Object Literals, Functions, Dates
*/
// Primitive data type

// String
let name = "Harry"
console.log("My name is " + name)
console.log("Data type is " + typeof name)

// Numbers
let marks = 34.4
console.log("Data type is " + typeof marks)

// Boolean
let isDriver = true
console.log("Data type is " + typeof isDriver)

// Null
let nullVar = null
console.log("Data type is " + typeof nullVar)

// Undefined
let undef = undefined
console.log("Data type is " + typeof undef)

// Reference Data Types

// Arrays
let myArr = [1,2,3,4,false,"string"]
console.log("Data type is " + typeof myArr)

// Object Literals
let stMarks = {
    harry:89,
    Shubham:36,
    Rohan:34,
}

console.table(stMarks)
console.log("Data type is " + typeof stMarks)

function findName() {
    
}
console.log("Date type is " + typeof findName)

let date = new Date()
console.log("Data type is " + typeof date)
