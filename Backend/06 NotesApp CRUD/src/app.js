const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDb = require("./config/db");
const app = express();
app.use(express.json()); // middleware

connectDb()

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/create", async (req, res) => {
  try {
    let { title, description } = req.body;
    let newNote = await NotesModel.create({
      title,
      description,
    });
    return res.status(201).json({
        message: "notes created successfully",
        data : newNote
    })
  } catch (error) {
    console.log("error in creation", error);
  }
});

module.exports = app;
