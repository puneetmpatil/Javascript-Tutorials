// Javascript Sets
console.log('This is Tutorial 58');

// Set stores unique values
const mySet = new Set();    // Initialize an empty set
console.log('The set looks like',mySet);

// Adding values to this set
mySet.add('this')
mySet.add('My name')
mySet.add('this')
mySet.add('that')
mySet.add(34)
mySet.add(true)
mySet.add(false)
mySet.add('that2')
console.log('The set looks like this now',mySet);

//? Use a constructor to initialize the set
let mySet2 = new Set([1,45,'this',false,{a:8,b:9},'this']);
console.log('New set:',mySet2)

// Get the size of the set
console.log(mySet.size)

// Check whether set has 346 or not
console.log(mySet.has(34))
console.log(mySet.has(346))

console.log('Before removal:',mySet.has('that2'))
mySet.delete('that2')               // Remove an element from the set
console.log('After removal:',mySet.has('that2'))

// Iterating a set
for(item of mySet){
    console.log(item)
}

mySet.forEach(item => {
    console.log('Item:',item)
})

// Quiz: Can you use Array.from(mySet) to convert set into an array
let myArraySet = Array.from(mySet)
console.log(myArraySet)