# QuickNotes

QuickNotes is a simple browser-based note-taking app for capturing personal reminders, work tasks and study ideas. Notes are displayed as cards, can be searched as you type, and remain available after a page refresh through browser `localStorage`.

## Features

- Add notes with Personal, Work or Study categories.
- Display each note with its category and creation date.
- Delete individual notes.
- Validate empty notes and notes longer than 200 characters.
- Search notes with a case-insensitive live search.
- Persist notes in the browser with `localStorage`.
- Responsive layout for desktop and small screens.

## Run locally

1. Clone this repository:

   ```bash
   git clone https://github.com/rwot-omiya/quicknotes-app.git
   ```

2. Open the project folder:

   ```bash
   cd quicknotes-app
   ```

3. Open `index.html` in a browser. For a local development server, run:

   ```bash
   python3 -m http.server 8000
   ```

   Then visit <http://localhost:8000>.

## What I learned

- How to use the DOM to read form values and create note cards with `createElement` and `textContent`.
- How browser events such as `submit`, `click` and `input` make a page interactive.
- How to store arrays of objects with `JSON.stringify` and restore them with `JSON.parse`.
- How to separate application state, rendering, validation and persistence into clear functions.
