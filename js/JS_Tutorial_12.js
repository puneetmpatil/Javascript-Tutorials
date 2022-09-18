console.log("This is Tutorial 12")
let a = document
// console.log(a)
// console.log(typeof a)
a = document.all
// console.log(a)
// a = document.body
// console.log(a)
// a = document.forms
// console.log(a)

Array.from(a).forEach(function(element) {
    console.log(element)
})
console.clear()
a = document.links[0].href;
console.log(a)

// Use document.images and document.scripts and print list of images and scripts on an html page

let img = document.images
Array.from(img).forEach(function(element) {
    console.log(element)
})

let scripts = document.scripts
Array.from(scripts).forEach(function(element) {
    console.log(element)
})