require("dotenv").config();

// database-connection
const {
  databaseConnection,
} = require("./database-connection/databaseConnection");

// socket-io
const { app, server } = require("./socket-io/socketIO");

// constants
const PORT = process.env.PORT || 5000;

// routes
app.use("/api/notes", require("./routes/notesRoutes"));

server.listen(PORT, async () => {
  await databaseConnection();
  console.log("listening");
});
