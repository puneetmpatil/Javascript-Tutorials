// For.. of Loop vs For.. in Loop (When to use which?)
console.log("This is tutorial 56")  


let people = ['Harry','Rohan','SkillF','Shubham','Vikrant']


// **********  FOR IN LOOPS **********
// ! Traditional For Loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element)
    
// }

// ? ITERATING AN OBJECT
let obj = {
    name:'Harry',
    language: 'JavaScript',
    hobbies: 'Android App Development'
}
// console.log(obj)

//! 1.1 Iterating an object using Traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]]
//     console.log(element)    
// }

//! 1.2 Iterating an object using for in loop
// for (const key in obj) {
//     console.log(obj[key])
// }

// ?2  ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = 'This is my string'
// for(char in myString) {
//     console.log(myString[char])
// }


// Quiz: Use traditional for loop to iterate through the same string
// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     console.log(element)
// }

// **************************************

// **********  FOR OF LOOPS ***********
console.log("For of loop starts here")
for (const name of people) {
    console.log(name)
}

for (const char of myString) {
    console.log(char)
}


// **************************************