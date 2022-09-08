console.log("Welcome to the app.js. This is my first experience in JavaScript");

//Functioning of the "Add Note" button.
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {

    let noteTxt = document.getElementById("noteTxt");
    if (noteTxt.value == "") {
        alert("Please enter some text to add note!")
    }
    else {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(noteTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        noteTxt.value = "";
        showNote();
    }
})

//Functioning of the displaying note section.
function showNote() {
    let html = "";
    notesObj.forEach(function (element, index) {
        let displayCard = document.getElementById("displayCard");
        html += `
            <div class="card my-3 text-bg-dark px-4 py-1" id="cardHolder">
                <div class="card-header">
                    <h5 class="card-title">Note ${index + 1}</h5>
                </div>
                <div class="card-body">
                <p class="card-text" id="displayTxt">${element}</p>
                <a id="${index}" onclick="deleteNote(${this.id})" id="deleteBtn" class="btn btn-primary">Delete</a>
                </div>
            </div>`;
        displayCard.innerHTML = html;
    })
}

//Functioning of the delete button
function deleteNote(indexOfCardToBeDeleted) {
    // console.log(`I am deleting note number ${parseInt(indexOfCardToBeDeleted) + 1}`);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(indexOfCardToBeDeleted, 1 );
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNote();
}

//Functioning of the search button
let searchBtn = document.getElementById("searchBtn");
// console.log(searchBtn);
searchBtn.addEventListener('input', function(e){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.forEach(function(element){
       console.log(element);
    })
})