import { useEffect, useState } from "react";
import { InputNoteArea } from "./components/inputarea";
import { Note } from "./components/note";
import { note_backend } from "declarations/note_backend";
import { Principal } from "@dfinity/principal";

export const NotePage = () => {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      //BA
      note_backend.addNoteAut(note.title, note.content);
      return [note, ...prevNotes];
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    //BA
    const principal = Principal.fromText("2vxsx-fae");
    console.log(principal);
    const notesArray = await note_backend.noteOf(principal);
    setNotes(notesArray);
  }

  function deleteNote(id) {
    //BA
    note_backend.deleteNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id, newTitle, newContent) {
    //BA
    note_backend.updateNote(id, newTitle, newContent);
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
