console.log("Welcome to tutorial 15")

let cont = document.querySelector('.no')
cont = document.querySelector('.container')
// console.log(cont.childNodes)
// console.log(cont.children)   // returns a HTML collection without text/comment/doctype/newline
let nodeName = cont.childNodes[1].nodeName
console.log(nodeName)
let nodeType = cont.childNodes[1].nodeType
console.log(nodeType)

/* Node Types
1. Element
2. Attribute
3. Text Node
8. Comment
9. Document
10. Doctype 
*/

let container = document.querySelector('div.container')
// console.log(container.children[1].children[0].children)

// console.log(container.firstChild) // = container.childNodes[0]
// console.log(container.firstElementChild) // = container.children[0]
// console.log(container.lastChild) // = container.childNodes[n-1]
// console.log(container.lastElementChild) // = container.children[n-1]
// console.log(container.childElementCount) // Count of child elements
console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)