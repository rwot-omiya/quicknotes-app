let notes = [];

const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

function render() {
  notesList.replaceChildren();

  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = `You have ${notes.length} notes.`;
  }

  for (const note of notes) {
    const item = document.createElement("li");
    item.className = `note-card category-${note.category}`;

    const text = document.createElement("p");
    text.className = "note-text";
    text.textContent = note.text;

    const meta = document.createElement("div");
    meta.className = "note-meta";

    const category = document.createElement("span");
    category.className = "category-label";
    category.textContent = note.category;

    const date = document.createElement("time");
    date.textContent = note.createdAt;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteNote(note.id));

    meta.append(category, date, deleteButton);
    item.append(text, meta);
    notesList.appendChild(item);
  }
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = noteInput.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    return;
  }

  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  const note = {
    id: Date.now(),
    text,
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  errorMessage.textContent = "";
  render();
  noteInput.value = "";
});

render();
