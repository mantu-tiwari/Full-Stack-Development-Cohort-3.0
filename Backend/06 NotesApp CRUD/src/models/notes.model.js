const { default: mongoose } = require("mongoose");

let notesSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
        minLength: [10, 'Miminum 10 Character is required'] // here second line is the message
    }
})

let NotesModel = mongoose.model('notes', notesSchema)
module.exports = NotesModel