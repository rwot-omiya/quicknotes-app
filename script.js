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

    meta.append(category, date);
    item.append(text, meta);
    notesList.appendChild(item);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const note = {
    id: Date.now(),
    text: noteInput.value.trim(),
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  render();
  noteInput.value = "";
});

render();
