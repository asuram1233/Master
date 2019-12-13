const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = Schema({
  batchId: { type: String, required: true },
  batchName: { type: String, required: true },
  studentName: { type: String, required: true },
  studentId: { type: String, required: true },
  studentContact: { type: Number, required: true },
  studentEmail: { type: String, required: true },
  guardianName: { type: String, required: true },
  guardianContact: { type: Number, required: true }
});

module.exports = mongoose.model("student", studentSchema);
