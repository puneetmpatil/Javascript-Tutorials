// Exercise 1
// You have to create a variable that is a string containing the text which is a link you are interested in

// You have to fetch all the links from a given page which contains this text

let a = ".org"
let link;

let links = document.links
Array.from(links).forEach(function(link){
    link = link.href.toString()
    if (link.includes(a))
        console.log(link)
})