// model
// notes model
const Note = require("../models/notesModel");

// all notes
const getAllNotes = (req, res) => {
  res.status(200).json("get all notes");
};

// add new note
const addNewNote = (req, res) => {
  res.status(200).json("add new note");
};

// delete note
const deleteNote = (req, res) => {
  res.status(200).json("delete note");
};

// exports
module.exports = {
  getAllNotes,
  addNewNote,
  deleteNote,
};
