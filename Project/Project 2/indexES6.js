console.log("This is ES6 version of Project 2")

class Book {
    constructor(name, author, type) {
        this.name = name
        this.author = author
        this.type = type
    }
}
class Display {
    add(book) {
        let books = localStorage.getItem('book')
        let tableBody = document.getElementById('tableBody');
        let bookStr = ''

        if (books != null) {
            books = JSON.parse(books)
            books.forEach(function (element) {
                bookStr += `<tr id = "${element.name}">
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button onclick = "deleteBook(${element.name})" type="button" class="btn btn-warning">Delete</button></td>
            </tr>`
            })
        }

        let uiString = `                
        <tr id="${book.name}">
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td><button onclick = "deleteBook(${book.name})" type="button" class="btn btn-warning">Delete</button></td>
        </tr>`
        tableBody.innerHTML = bookStr + tableBody.innerHTML + uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm')
        libraryForm.reset()
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2)
            return false
        return true
    }
    show(type, displayMessage) {
        let message = document.getElementById('message')
        let boldText;
        if (type == 'success')
            boldText = 'Success'
        else
            boldText = 'Error'
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}: </strong>${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`
        setTimeout(() => {
            message.innerHTML = ''
        }, 5000)
    }
    static localStorageContent() {
        let books = localStorage.getItem('book')
        let tableBody = document.getElementById('tableBody');
        let bookStr = ''

        if (books != null) {
            books = JSON.parse(books)
            books.forEach(function (element) {
                bookStr += `<tr id="${element.name}" >
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td><button type="button" onclick = "deleteBook(${element.name})" class="btn btn-warning">Delete</button></td>
            </tr>`
            })
        }
        tableBody.innerHTML += bookStr;
    }
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
            Display.localStorageContent();
        }
        // Show error to user
        display.show('danger','Sorry you cannot add this book')
    }

}
/*
const deleteBook = (id) => {
    if (confirm('Are you sure you want to delete this book?')){
        let delBook = document.getElementById(id)
        console.log(id)
        console.log(delBook);
        let books = localStorage.getItem('book');
        let i = 0;
        books = JSON.parse(books)
        console.log(books)
        Array.from(books).forEach((book) => {
            if (book.title == String(id))
                i = index
        })
        console.log(i)
    }
}
*/