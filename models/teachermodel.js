const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teacherSchema = new Schema(
  {
    mentorId: {
      type: String,
      unique: true,
      required: true
    },
    mentor: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    experience: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    education: {
      type: String,
      required: true
    },
    gender: {
      type:String,
      required: true
    },
    dob: {
      type: Date,
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
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Teacher", teacherSchema);