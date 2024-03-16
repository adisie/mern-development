import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// globals
import {SOCKET} from '../../config'

// initial state
const initialState = {
  notes: [],
};

// get all notes
export const getAllNotes = createAsyncThunk("notes/getAllNotes", async () => {
  try {
    const response = await axios.get("/api/notes/all-notes");
    return response.data;
  } catch (err) {
    return err.response.data;
  }
});

// add new note
export const addNewNote = createAsyncThunk("notes/addNewNote", async (data) => {
  try {
    const response = await axios.post("/api/notes/new-note", data);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
});

// delete note
export const deleteNote = createAsyncThunk('notes/deleteNote', async _id => {
  try {
    const response = await axios.delete(`/api/notes/delete-note/${_id}`)
    return response.data
  } catch (err) {
    return err.response.data
  }
})

// notes slice
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // add new note event
    newNoteEvent: (state, action) => {
      let notes = [action.payload, ...state.notes] 
      let filteredNotes = [] 
      notes.forEach(note => {
        let isNoteExist = filteredNotes.find(not => not._id === note._id)
        if (!isNoteExist) {
          filteredNotes.push(note)
        }
      })
      state.notes = filteredNotes
    },
    // delete note event
    deleteNoteEvent: (state, action) => {
      state.notes = state.notes.filter(note => note._id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      // cases
      // get all notes
      // fulfilled case
      .addCase(getAllNotes.fulfilled, (state, action) => {
        if (action.payload.notes) {
          state.notes = action.payload.notes;
        }
      })
      // rejected case
      .addCase(getAllNotes.rejected, () => {
        console.log("get all notes rejected case");
      })
      // add new note
      // pending case
      .addCase(addNewNote.pending, () => {
        console.log("add new note pending case");
      })
      // fulfilled case
      .addCase(addNewNote.fulfilled, (state, action) => {
        if (action.payload.newNote) {
          SOCKET.emit('newNote',action.payload.newNote)
        }
      })
      // rejected case
      .addCase(addNewNote.rejected, () => {
        console.log("add new note rejected case");
      })
    // delete note
    // pending case
      .addCase(deleteNote.pending, () => {
      console.log('delete note pending case')
      })
    // fulfilled case
      .addCase(deleteNote.fulfilled, (state, action) => {
        if (action.payload._id) {
        SOCKET.emit('deleteNote',action.payload._id)
      }
      })
    // rejected case
      .addCase(deleteNote.rejected, () => {
      console.log('delete note rejected case')
    })
  },
});

// actions
export const {
  newNoteEvent,
  deleteNoteEvent,
} = notesSlice.actions

// selectors
export const selectNotes = (state) => state.notes.notes;

// exports
export default notesSlice.reducer;
