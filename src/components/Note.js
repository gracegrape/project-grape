import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  return (
    <div className="note">
      <span> Hello! </span>
      <div className="note-footer">
        <small>da dateo</small>
        <MdDeleteForever
          className="delete-icons"
          size="1.3em"
        ></MdDeleteForever>
      </div>
    </div>
  );
};

export default Note;
