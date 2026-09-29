const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDb = require("./config/db");
const createNotesController = require("./controllers/notes.controller");
const notesRoutes = require('./routes/notes.route')
const app = express();
app.use(express.json()); // middleware

connectDb()

app.get("/", (req, res) => {
  res.send("hello");
});

app.use('/notes', notesRoutes ) // import route from routes

module.exports = app;
