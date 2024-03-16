// model
// notes model
const Note = require("../models/notesModel");

// all notes
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({ notes });
  } catch (err) {
    res.status(400).json({
      error: "get all notes error",
    });
  }
};

// add new note
const addNewNote = async (req, res) => {
  try {
    const { note } = req.body;
    const newNote = await Note.create({ note });
    res.status(200).json({
      newNote,
    });
  } catch (err) {
    res.status(400).json({
      error: "add new note error",
    });
  }
};

// delete note
const deleteNote = async (req, res) => {
  try {
    const { _id } = req.params;
    const note = await Note.findById(_id);
    if (!note) {
      return res.status(400).json({
        error: "note not found",
      });
    }
    await note.deleteOne();
    res.status(200).json({
      _id,
      message: "note deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: "delete note error",
    });
  }
};

// exports
module.exports = {
  getAllNotes,
  addNewNote,
  deleteNote,
};
