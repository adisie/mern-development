require("dotenv").config();
const express = require('express')

// database-connection
const {
  databaseConnection,
} = require("./database-connection/databaseConnection");

// socket-io
const { app, server } = require("./socket-io/socketIO");

// constants
const PORT = process.env.PORT || 5000;

// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use("/api/notes", require("./routes/notesRoutes"));

server.listen(PORT, async () => {
  await databaseConnection();
  console.log("listening");
});
