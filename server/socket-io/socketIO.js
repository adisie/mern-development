const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

// app
const app = express();

// server
const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: ["http://localhost:5173",],
    credentials: true,
  },
});

io.on('connection', socket => {
  socket.on('newNote', newNote => {
    io.emit('newNoteEvent',newNote)
  })
  socket.on('deleteNote', _id => {
    io.emit('deleteNoteEvent',_id)
  })
})

// exports
module.exports = {
  app,
  server,
};
