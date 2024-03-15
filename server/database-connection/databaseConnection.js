const mongoose = require("mongoose");

// database connection
const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected");
  } catch (err) {
    console.log("database connection error", err.message);
  }
};

// exports
module.exports = {
  databaseConnection,
};
