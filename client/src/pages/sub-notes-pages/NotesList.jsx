import { useSelector } from "react-redux";

// actions from slices
// notes slice
import { selectNotes } from "../../features/notes/notesSlice";

// sub notes pages
import SingleNote from "./SingleNote";

const NotesList = () => {
  // states from slices
  const notes = useSelector(selectNotes);

  return (
    <div className="flex-grow max-h-[84vh] overflow-y-auto">
      <div className="main-container-max-width py-[1%] ">
        {notes?.map((note) => (
          <SingleNote key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
