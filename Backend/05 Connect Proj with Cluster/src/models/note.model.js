const mongoose = require("mongoose");

// ye ek schema hai yani sturcture jis format me data accept hoga
let notesSchema = new mongoose.Schema({
  title: {
    type: String,
    reqired: true,
  },
  description: {
    type: String,
    minLength: 10,
  },
});

let NotesModel = mongoose.model('notes', notesSchema)

module.exports = NotesModel