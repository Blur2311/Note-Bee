import { useEffect, useState } from "react";
import { InputNoteArea } from "./components/inputarea";
import { Note } from "./components/note";
import { note_backend } from "declarations/note_backend";

export const NotePage = () => {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      note_backend.createNote(note.title, note.content);
      return [note, ...prevNotes];
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await note_backend.readNotes();
    setNotes(notesArray);
  }

  function deleteNote(id) {
    note_backend.deleteNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id, newTitle, newContent) {
    // note_backend.updateNote(id, newTitle, newContent);
    setNotes((prevNotes) => {
      return prevNotes.map((noteItem, index) => {
        if (index === id) {
          return { ...noteItem, title: newTitle, content: newContent };
        }
        return noteItem;
      });
    });
  }

  return (
    <div className="container">
      <InputNoteArea onAdd={addNote} />
      <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap mt-5">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
    </div>
  );
};
