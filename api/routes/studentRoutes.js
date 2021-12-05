const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {
  getStudents,
  addStudent,
  getStudentById,
  editStudent,
  deleteStudent,
} = require('../controllers/studentController');

const Student = require('../models/studentModel');

//////////   Get Students   //////////
router.get('/', getStudents);

//////////   Get Student By ID   //////////
router.get('/:id', getStudentById);

//////////   Create Student   //////////
router.post('/add', addStudent);

//////////   Update Student   //////////
router.put('/:id', editStudent);

//////////   Delete Student   //////////
router.delete('/:id', deleteStudent);

module.exports = router;
