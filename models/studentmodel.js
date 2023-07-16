const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema(
  {
    studentId:{
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    dob: {
      type: String,
      required: true
    },
    phonenumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    location: {
      type: String,     
      required: true,
    },
    mentor: {
      type: String,
      required: true
    },
    mentorID: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Student", studentSchema);