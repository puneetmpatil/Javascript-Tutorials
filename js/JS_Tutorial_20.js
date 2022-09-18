// Local & Session storage in JavaScript
console.log("This is Tutorial 20")

// ! Local storage
let impArr = ['ginger','onion','ladyfinger']

// Add a key-value pair inside local storage
localStorage.setItem('Name','Harry')
localStorage.setItem('Name2','Rohan')
// We can't add arrays directly in local Storage
localStorage.setItem('Vegetable',JSON.stringify(impArr))

// Clears the entire local storage
// localStorage.clear();

// Clear a  particular key-value pair
localStorage.removeItem('Name2')


// Retrieve an item from the local storage
let name = localStorage.getItem('Name')
// name = localStorage.getItem('skdsdssl') // => null
console.log(name)
console.log(JSON.parse(localStorage.getItem('Vegetable')))

// console.log(typeof localStorage)
// console.log(localStorage)
// console.log(localStorage.Name)

//! Session storage (gets cleared once browser has been closed)
sessionStorage.setItem('sessionName','sHarry')
sessionStorage.setItem('sessionName2','sRohan')
sessionStorage.setItem('sessionVegetable',JSON.stringify(impArr))
// sessionStorage.clear()