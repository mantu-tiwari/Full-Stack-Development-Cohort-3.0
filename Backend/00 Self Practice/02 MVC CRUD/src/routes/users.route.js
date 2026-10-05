const express = require("express");
const {
  createStudentsController,
  getAllStudentsData,
  getSingleStudentData,
  deleteStudentController,
  updateStudentController,
} = require("../controller/users.controller");
const StudentsModel = require("../models/users.model");
const router = express.Router();

router.post("/create", createStudentsController);
router.get("/allStudents", getAllStudentsData);
router.get("/:id", getSingleStudentData);
router.delete("/:id", deleteStudentController);
router.put("/:id", updateStudentController);

module.exports = router;
