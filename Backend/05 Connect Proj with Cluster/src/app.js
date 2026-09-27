const express = require("express");
const app = express();
app.use(express.json()); // middleware
const connectDb = require("./config/db");
const NotesModel = require("./models/note.model");

connectDb();

app.get("/", (req, res) => {
  res.send("i am running with new MVC structure");
});

app.post("/create", async(req, res) => {
  let { title, description } = req.body;
  const newNote = await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "Notes created Successfully",
    data: newNote
  });
});

module.exports = app;
