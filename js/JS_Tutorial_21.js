// CTRL+ SHIFT + R
console.log("Tutorial 21 Exercise 21 Javascript")
// Creating Editable Div Using JavaScript

/*
You have to create a div and inject it into the page which contains a heading. 
Whenever someone clicks in the div, it should be converted into an editable item. Whenever user clicks away (blur). Save the note into local storage
*/
div = document.createElement("div");
div.innerText = "This is a div"
div.setAttribute("id",'edit')
div.setAttribute('contenteditable','true')

let heading = document.querySelector('h1')
heading.appendChild(div)

document.getElementById('edit').addEventListener('',() => {
    localStorage.setItem('content',div.innerText)
})