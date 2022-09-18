console.log("Welcome to Tutorial 14")
/*
1. Single element selector
2. Multi element selector
*/

// 1. Single element selector
let a = document.getElementById("myFirst")
// console.log(a)
// a = a.className
// console.log(a)
// a = a.childNodes
// console.log(a)
// a = a.parentNode
// console.log(a)
a.style.color = 'red'
a.innerText = "Harry is a good boy"
a.innerHTML = "<b>Harry is a good boy</b>"
console.log(a.innerHTML)
console.log(a.innerText)

let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('b');
sel = document.querySelector('h1');
sel = document.querySelector('div');
sel.style.color = 'green'
console.log(sel)

// 2. Multi element selector
let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container')
elems = document.getElementsByTagName('div')
console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element)
    element.style.color = 'blue'
}
/*
Array.from(elems).forEach(element => {
    element.style.color = 'blue'
})
// console.log(elems[0].getElementsByClassName('child'))
*/