import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
  notes: [],
};

// get all notes
export const getAllNotes = createAsyncThunk("notes/getAllNotes", async () => {
  try {
    const response = await axios.get("/api/notes/all-notes");
    console.log(response);
  } catch (err) {
    console.log(err);
    return;
  }
});

// notes slice
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// exports
export default notesSlice.reducer;
