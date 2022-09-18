console.log("This is index.js")

/*
TODOS
1. Store all the data to the localStorage
2. Give another column as an option to delete the book
3. Add a scrollbar to the view
*/

// Constructor
function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    let books = localStorage.getItem('book')
    let tableBody = document.getElementById('tableBody');
    let bookStr = ''

    if (books != null) {
        books = JSON.parse(books)
        books.forEach(function (element){
            bookStr += `<tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button type="button" class="btn btn-warning">Delete</button></td>
            </tr>`
        })
    }

    let uiString = `                
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td><button type="button" class="btn btn-warning">Delete</button></td>
        </tr>`
    tableBody.innerHTML = bookStr + tableBody.innerHTML + uiString;
}
// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset()
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2)
        return false
    return true
}

// Implement the show function
Display.prototype.show = function (type,displayMessage) {
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message: </strong>${displayMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
  setTimeout(() => {
    message.innerHTML = ''
  },2000)
}
Display.prototype.localStorageContent = () => {
    let books = localStorage.getItem('book')
    let tableBody = document.getElementById('tableBody');
    let bookStr = ''

    if (books != null) {
        books = JSON.parse(books)
        books.forEach(function (element){
            bookStr += `<tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button type="button" class="btn btn-warning">Delete</button></td>
            </tr>`
        })
    }
    tableBody.innerHTML += bookStr;
}


// Add submit event listener to form
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
    e.preventDefault()
    // console.log("You have successfully submitted")

    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value

    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    let type;
    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }

    let book = new Book(name, author, type)
    // console.log(book)

    let display = new Display()

    if (display.validate(book)) {
        display.add(book)
        display.clear()
        display.show('success','Your book has been successfully added')

        if (localStorage.length == 0) {
            bookobj = []
        }
        else{
            bookobj = localStorage.getItem('book');
            bookobj = JSON.parse(bookobj);
        }
        bookobj.push(book)
        localStorage.setItem('book',JSON.stringify(bookobj))
    }
    else {
        if (localStorage != null){
            display.localStorageContent();
        }
        // Show error to user
        display.show('danger','Sorry you cannot add this book')
    }

}