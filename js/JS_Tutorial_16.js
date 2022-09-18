console.log("Welcome to Tutorial 16")

// Create a new element
let element = document.createElement('li')

let text = document.createTextNode('I am a text node')
element.appendChild(text)
// Add a class name to the li element
element.className = 'childul'
element.id = 'createdLi'
element.setAttribute('title','mytitle')
/*
element.innerText = "Hello this is created by harry"
element.innerHTML = "<b>Hello this is created by harry</b>"
console.log(element)
*/
let ul = document.querySelector('ul.this')
console.log(ul)
ul.appendChild(element)

// Replace an element
let elem2 = document.createElement('h3')
elem2.id = 'elem2'
elem2.className = 'elem2'
let tnode = document.createTextNode('This is a created node for elem2')
elem2.appendChild(tnode)

element.replaceWith(elem2)

let myul = document.getElementById('myul')
myul.replaceChild(element,document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))

let pr = elem2.getAttribute('id');
console.log(pr)
pr = elem2.getAttribute('class');
console.log(pr)
pr = elem2.hasAttribute('href')
console.log(pr)
elem2.removeAttribute('id')
elem2.setAttribute('title','myelem2title')
console.log(elem2)

/*
! Quick Quiz:
Create a heading element with text as "Go to CodeWithHarry"
and create a tag outside it with href = "https://www.codewitharry.com"

let h1 = document.createElement('h1')
let textN = document.createTextNode('Go to CodeWithHarry')
h1.appendChild(textN)

let anchor = document.createElement('a')
anchor.setAttribute('href','https://www.codewithharry.com')
anchor.append(h1)

let dummy = document.querySelector('.no')
dummy.appendChild(anchor);
*/
