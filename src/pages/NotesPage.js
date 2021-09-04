import NotesList from "../components/notes-component/NotesList";
import Search from "../components/notes-component/Search";
import Header from "../components/notes-component/Header";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "../css/notes-page.css";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
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

  // Functions
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

  // Return stuff
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="notes-container">
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
};

export default NotesPage;
