import { useEffect } from "react";
import { useDispatch } from "react-redux";

// actions from slices
// notes slice
import { getAllNotes,newNoteEvent,deleteNoteEvent } from "../features/notes/notesSlice";

// sub notes pages
import NotesList from "./sub-notes-pages/NotesList";
import NewNote from "./sub-notes-pages/NewNote";
import notesSlice from "../features/notes/notesSlice";

// globals
import {SOCKET} from '../config'

const Notes = () => {
  // dispatch
  const dispatch = useDispatch();

  // use effect
  // get all notes
  useEffect(() => {
    dispatch(getAllNotes())
  }, []);

  // new note event 
  useEffect(() => {
    SOCKET.on('newNoteEvent', newNote => {
      dispatch(newNoteEvent(newNote))
    })
  }, [])
  
  // delete note
  useEffect(() => {
    SOCKET.on('deleteNoteEvent', _id => {
      dispatch(deleteNoteEvent(_id))
    })
  },[])

  return (
    <div className="flex-grow flex flex-col">
      <NotesList />
      <NewNote />
    </div>
  );
};

export default Notes;
