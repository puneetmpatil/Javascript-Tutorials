console.log("This is tutorial 25")

/*
You have to create a div and inject it into the page which contains a heading. 
Whenever someone clicks in the div, it should be converted into an editable item. Whenever user clicks away (blur). Save the note into local storage
*/
// Create a new element
let divElem = document.createElement("div");

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val == null)
    text = document.createTextNode("This is my element. Click to edit it")
else{
    text = document.createTextNode(val);
} 
divElem.appendChild(text)

// Give element id,style and class
divElem.setAttribute('id','elem')
divElem.setAttribute('class','elem')
divElem.setAttribute('style','border: 2px solid black;width:154px;margin:34px;padding:23px;')

// Grab the main container
let container = document.querySelector('.container')
let first = document.getElementById('myfirst')

// Insert the element before element with id first
container.insertBefore(divElem, first)

// Add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});
  