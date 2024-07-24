import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export const Note = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);
  const [editContent, setEditContent] = useState(props.content);

  function deleteNote() {
    props.onDelete(props.id);
  }

  function editNote() {
    setShowEditModal(true);
  }

  function handleSave() {
    props.onEdit(props.id, editTitle, editContent);
    setShowEditModal(false);
  }

  return (
    <>
      <div className="note rounded bg-white">
        <h1>{props.title}</h1>
        <p>{props.content}</p>

        <div className="">
          <button className="bg-white" onClick={deleteNote}>
            <DeleteIcon />
          </button>
          <button className="bg-white" onClick={editNote}>
            <EditIcon />
          </button>
        </div>
      </div>

      {showEditModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Content</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowEditModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn custom-btn"
                  onClick={handleSave}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
