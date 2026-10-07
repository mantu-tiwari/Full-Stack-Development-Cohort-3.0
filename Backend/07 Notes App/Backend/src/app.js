const express = require("express");
const app = express();
const notesRoutes = require("./routes/notes.routes");
const connectDatabase = require("./config/db");
app.use(express.json());

connectDatabase()

app.get("/", (req, res) => {
  res.send("testing");
});

app.use("/notes", notesRoutes);

module.exports = app;
