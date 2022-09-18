console.log('Welcome to notes app. This is app.js')
showNotes()
// if user adds a note add it to the local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    let addTxt = document.getElementById('addTxt')
    let addTitle = document.getElementById('addTitle')
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('title');
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes)
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesobj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addTxt.value = ""
    addTitle.value = "";

    showNotes();
})

// Function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem('notes');
    let title = localStorage.getItem('title');
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes)
    }
    let html = ''
    notesobj.forEach(function (element, index) {
        html += `
        <div class="noteCard card mx-2 my-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById('notes')
    if (notesobj.length != 0)
        notesElm.innerHTML = html
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`
    }
}

// Function to delete a note
const deleteNote = (index) => {
    
    if (confirm('Are you sure you want to delete this note?')){
        console.log("I am deleting", index)
        notes = localStorage.getItem('notes')

        notesobj = JSON.parse(notes)
        notesobj.splice(index, 1)
        localStorage.setItem('notes', JSON.stringify(notesobj))

        showNotes()
    }
    
}

let search = document.getElementById('searchTxt')
search.addEventListener('input', function (e) {
    
/*
let inputVal = search.value.toLowerCase();
// console.log('Input event fired!', inputVal);
let noteCards = document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
    // console.log(cardTxt);
})
*/

    let notes = localStorage.getItem('notes');
    notesobj = JSON.parse(notes)

    let html = ""
    notesobj.forEach(function (element,index) {
        if (element.title.toLowerCase().includes(search.value.toLowerCase()) || element.text.toLowerCase().includes(search.value.toLowerCase())) {
            html += `
            <div class="noteCard card mx-2 my-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
            </div>
        </div>`;
        }
    })
    let notesElm = document.getElementById('notes')
    if (notesobj.length != 0)
        notesElm.innerHTML = html
    else
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`
})

/*
Further Features
1. Add Title
2. Mark a note as important
3. Separate notes by user 
4. Sync and host to web server
*/