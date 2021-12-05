const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const studentSchema = mongoose.Schema({
  //   _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  rollNumber: { type: String },
  cgpa: { type: String },
  batch: { type: String },
  degreeStatus: { type: String },
});

// Adding auto incrementing ID using (npm i) mongoose-auto-increment
// autoIncrement.initialize(mongoose.connection);
// studentSchema.plugin(autoIncrement.plugin, 'Student');

module.exports = mongoose.model('Student', studentSchema);
