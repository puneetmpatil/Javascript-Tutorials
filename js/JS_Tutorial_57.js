// JavaScript Maps
console.log('This is tutorial 57')

// Maps in JavaScript : We can use any type of key or value

let myMap = new Map()

const key1 = 'myStr', key2 = {}, key3 = function () { }

// Setting map values
myMap.set(key1, 'This is a string')
myMap.set(key2, 'This is a blank obj')
myMap.set(key3, 'This is an empty function')

console.log(myMap)

// Getting the values from a Map
console.log(myMap.get(key1))
console.log(myMap.get(key2))
console.log(myMap.get(key3))

// Get the size of the map
console.log(myMap.size)


// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);

}

// Get only keys
for(let key of myMap.keys()) {
    console.log('Key is',key);
}
// Get only values
for(let value of myMap.values()) {
    console.log('Value is', value);
}

// You can loop through a map using for each loop
myMap.forEach((value,key) => {
    console.log(key,value);
})

// Converting map to an array
let myArray = Array.from(myMap)
console.log('Map to array is ', myArray);

// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys())
console.log('Map to keys array is ', myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values())
console.log('Map to values array is ', myValuesArray);


