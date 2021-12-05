const Student = require('../models/studentModel');

const getStudents = (req, res) => {
  let student = Student.find()
    .then((result) => {
      res.status(200).json({
        statusCode: '200',
        students: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        statusCode: '500',
        statusMessage: err,
      });
    });
};

const addStudent = (req, res) => {
  console.log('Inside addStudent');
  const student = req.body;
  //   console.log(student.name);

  const createStudent = new Student({
    // _id: new mongoose.Types.ObjectId(),
    name: student.name,
    rollNumber: student.rollNumber,
    cgpa: student.cgpa,
    batch: student.batch,
    degreeStatus: student.degreeStatus,
  });

  createStudent
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        statusCode: '201',
        message: 'Student created successfully',
      });
    })
    .catch((err) => {
      res.status(500).json({
        statusCode: '500',
        message: err,
      });
    });
};

const getStudentById = async (req, res) => {
  const id = req.params.id; //Get ID from URL

  try {
    const student = await Student.findById(id);
    res.status(200).json({
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const editStudent = async (req, res) => {
  const student = req.body;

  const editedStudent = new Student(student);

  try {
    await Student.updateOne({ _id: req.params.id }, editedStudent);
    res.status(200).json({
      student: editedStudent,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.deleteOne({ _id: req.params.id });
    res.status(200).json({
      statusCode: '200',
      statusMessage: 'Student deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getStudents,
  addStudent,
  getStudentById,
  editStudent,
  deleteStudent,
};
