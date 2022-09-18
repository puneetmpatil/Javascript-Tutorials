// Implementing a library class - Exercise 4
console.log("This is Tutorial 32 - solution")
/*
Create a class library and implement the following:
constructor must take the book list as an argument
getBookList()
issueBook(bookName,user)
returnBook(bookName)

*/

class Library{
    constructor(bookList){
        this.bookList=bookList;
        this.issuedBook = {}
    }
    getBookList(){
        this.bookList.forEach((element) => {
            console.log(element)
        })
    }
    issueBook(bookName,user){
        if (this.issuedBook[bookName] == undefined){
            this.issuedBook[bookName] = user
            return `${bookName} has been issued to ${user}`
        }
        else
            console.log("This book is already issued")

    }
    returnBook(bookName){
        delete this.issuedBook[bookName];
        let str = `${bookName} was returned back by ${this.user}`; 
        return str;
    }

    
}

const bookList = ['In Search of Lost Time','Ulysses','Don Quixote','One Hundred Years of Solitude','The Great Gatsby']

let library = new Library(bookList);
console.log(library.getBookList())
console.log(library.issueBook('In Search of Lost Time','Puneet'))
console.log(library.getBookList())
console.log(library.returnBook('In Search of Lost Time'))
console.log(library.getBookList())