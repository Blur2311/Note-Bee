import { AddCircleOutline } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";
import { useState } from "react";

export const InputNoteArea = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <form action="" className="create-note">
      {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      )}
      <textarea
        name="content"
        onClick={expand}
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
      />
      <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddCircleOutline />
        </Fab>
      </Zoom>
    </form>
  );
};
