const { Router } = require("express");

// routes
// notes routes
const {
  getAllNotes,
  addNewNote,
  deleteNote,
} = require("../controllers/notesControllers");

// router
const router = Router();

// get all notes
router.get("/all-notes", getAllNotes);

// add new note
router.post("/new-note", addNewNote);

// delete note
router.delete("/delete-note/:_id", deleteNote);

// exports
module.exports = router;
