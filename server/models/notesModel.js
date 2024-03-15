const mongoose = require("mongoose");

// notes schema
const notesSchema = new mongoose.Schema(
  {
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// exports
module.exports = mongoose.model("Note", notesSchema);
