import { useEffect } from "react";
import { useDispatch } from "react-redux";

// actions from slices
// notes slice
import { getAllNotes } from "../features/notes/notesSlice";

// sub notes pages
import NotesList from "./sub-notes-pages/NotesList";
import NewNote from "./sub-notes-pages/NewNote";
import notesSlice from "../features/notes/notesSlice";

const Notes = () => {
  // dispatch
  const dispatch = useDispatch();

  // use effect
  // get all notes
  useEffect(() => {
    dispatch(getAllNotes())
  }, []);

  return (
    <div className="flex-grow flex flex-col">
      <NotesList />
      <NewNote />
    </div>
  );
};

export default Notes;
