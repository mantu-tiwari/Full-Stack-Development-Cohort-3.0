const mongoose = require('mongoose');

let studentsSchema = new mongoose.Schema({
    studentName: {
        type: String, 
        required: true
    },
    studentClass: {
        type: String, 
        required: true,
        // maxLength: [2, "Maximum 2 character is required"]
    }
})

let StudentsModel = mongoose.model('studentData', studentsSchema)
module.exports = StudentsModel