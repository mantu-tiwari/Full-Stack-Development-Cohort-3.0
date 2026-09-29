const express = require('express')
const {createNotesController, getAllNotesController, getSingleNotesController, updateNotesController, deleteNotesController} = require('../controllers/notes.controller')
const router = express.Router()

// CREATE
router.post('/create', createNotesController)

// READ 1
router.get('/allNotes', getAllNotesController)
// READ 2
router.get('/:id', getSingleNotesController)

// UPDATE
router.put('/:id', updateNotesController)

// DELETE
router.delete('/:id', deleteNotesController)

module.exports = router 