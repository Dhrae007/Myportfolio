const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

addBtn.addEventListener("click", addNote);

function addNote(text = ""){

const note = document.createElement("div");
note.classList.add("note");

note.innerHTML = `
<span class="delete">X</span>
<textarea>${text}</textarea>
`;

notesContainer.appendChild(note);

note.querySelector(".delete").addEventListener("click", () => {
note.remove();
saveNotes();
});

note.querySelector("textarea").addEventListener("input", saveNotes);

saveNotes();

}

function saveNotes(){

const notes = [];

document.querySelectorAll("textarea").forEach(note=>{
notes.push(note.value);
});

localStorage.setItem("notes", JSON.stringify(notes));

}

function loadNotes(){

const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");

savedNotes.forEach(note=>{
addNote(note);
});

}

loadNotes();