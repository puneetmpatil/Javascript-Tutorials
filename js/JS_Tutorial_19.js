// Smart Page Crawler in JS Exercise 1
console.log("This is tutorial 19")

// Exercise 1
// You have to create a variable that is a string containing the text which is a link you are interested in

// You have to fetch all the links from a given page which contains this text

let str = "python"
let links = document.links
let href;

Array.from(links).forEach(function(element){
    href = element.href
    if (href.includes(str))
        console.log(href);
})