const mongoose = require("mongoose");

let MONGODB_URI = "mongodb://127.0.0.1:27017/plantsDatabase";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected 2 MongoDB.");
  })
  .catch((e) => {
    console.error("Connection no good", e.message);
  });

const db = mongoose.connection;

module.exports = db;
