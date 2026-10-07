const { default: mongoose } = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "minmium 10 digit is required"],
  },
});

const NotesModel = mongoose.model("notesData", notesSchema);

module.exports = NotesModel;
