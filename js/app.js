console.log("welcome to the project 1 NOTES APP");
showNotes();

// if user adds a note to localstorage 
let z = document.getElementById('addBtn');
let onClick = function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
}
z.addEventListener('click', onClick);

// function to show elements from localstorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <buttton id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
            </div> 
            </div>
            `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

// fuction to delete a note
function deleteNote(index) {
    // console.log('i am deleting', index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


// function to search
let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){

let inputVal=search.value.toLowerCase();
    // console.log('Input event fired!,inputVal');
    let noteCard= document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function (element){
        let cardTxt= element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});
var a=  "http://magicnotes.com";
a.hostname == "magicnotes.com";
a.pathname == "magicnotes";

const myUrl = new URL("https://www.magicnotes.com");
        /*
        Done By-Devbhan Singh
        Special Thanks-Shreyansh Chohan.
        */

