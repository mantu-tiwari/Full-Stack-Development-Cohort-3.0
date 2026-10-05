const StudentsModel = require("../models/users.model");

const createStudentsController = async (req, res) => {
  try {
    let { studentName, studentClass } = req.body;
    let newData = await StudentsModel.create({
      studentClass,
      studentName,
    });
    return res.status(201).json({
      message: "Student data added successfully",
      data: newData,
    });
  } catch (error) {
    console.log("error in creating ", error);
  }
};

const getAllStudentsData = async (req, res) => {
  try {
    let allStudentsData = await StudentsModel.find();
    return res.status(200).json({
      message: "all Students fetched",
      data: allStudentsData,
    });
  } catch (error) {
    console.log("error in getting all students", error);
  }
};

const getSingleStudentData = async (req, res) => {
  try {
    let studentId = req.params.id;
    let singleStudent = await StudentsModel.findById(studentId);
    return res.status(200).json({
      message: "single student found",
      data: singleStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const deleteStudentController = async (req, res) => {
  try {
    let studentId = req.params.id;
    await StudentsModel.findByIdAndDelete(studentId);
    return res.status(200).json({
      message: "student deleted succsssfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const updateStudentController = async (req, res) => {
  try {
    let studentId = req.params.id
    let body = req.body
    let updateStudent = await StudentsModel.findByIdAndUpdate(studentId, body, {new:true})
    return res.status(200).json({
        message: 'student updated successfully',
        data: updateStudent
    })
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports = {
  createStudentsController,
  getAllStudentsData,
  getSingleStudentData,
  deleteStudentController,
  updateStudentController
};
