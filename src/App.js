import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is the first noteaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is the 2 note",
      date: "15/05/2021",
    },
    {
      id: nanoid(),
      text: "This is the 3 note",
      date: "15/06/2021",
    },
    {
      id: nanoid(),
      text: "This is the 4 note",
      date: "15/07/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  /** If [] is empty -> will only run on first load */
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  /** Save note to local storage anytime it changes */
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote]; // create a new array instead of updating old one
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((currNote) => currNote.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
