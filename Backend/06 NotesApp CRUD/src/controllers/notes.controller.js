const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;
    let newNote = await NotesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "notes created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("error in creation", error);
  }
};

const getAllNotesController = async (req, res) => {
  try {
    let allNotes = await NotesModel.find();
    return res.status(200).json({
      message: "all notes fetched",
      data: allNotes,
    });
  } catch (error) {
    console.log("get all notes error", error);
  }
};

const getSingleNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let note = await NotesModel.findById(noteId);

    return res.status(200).json({
      message: "successfully fectched single item",
      data: note,
    });
  } catch (error) {
    console.log("fetching single data error", error);
  }
};

const updateNotesController = async (req, res) => {
    try {
        let noteId = req.params.id
        let body = req.body
        let updateNote = await NotesModel.findByIdAndUpdate(noteId, body, {new:true})
        return res.status(200).json({
            message: 'notes updated successuflly',
            data: updateNote
        })
    } catch (error) {
        return res.status(500).json({
            message: 'internal server error'
        })
    }
}

const deleteNotesController = async (req, res) => {
    try {
        let noteId = req.params.id

        await NotesModel.findByIdAndDelete(noteId)
        return res.status(200).json({
            message: 'notes deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  updateNotesController,
  deleteNotesController
};
