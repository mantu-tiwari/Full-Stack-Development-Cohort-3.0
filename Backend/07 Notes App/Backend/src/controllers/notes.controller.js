const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;
    let newNotes = await NotesModel.create({
      title,
      description,
    });
    res.status(201).json({
      message: "notes created successfully",
      data: newNotes,
    });
  } catch (error) {
    console.log('error in creating data', error);
  }
}

module.exports = createNotesController