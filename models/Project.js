const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // ImgBB বা অন্য কোনো লিংকের জন্য
  },
  liveLink: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  serverLink: {
    type: String, // Optional (নাও থাকতে পারে)
  },
  tech: {
    type: [String], // Array of strings (যেমন: ["React", "Node"])
    required: true,
  },
  features: {
    type: [String], // Array of strings
  },
  challenges: {
    type: String,
  },
  improvements: {
    type: String,
  },
  // ক্রেডেনশিয়াল অবজেক্ট হিসেবে থাকবে
  credentials: {
    adminEmail: String,
    adminPass: String,
    userEmail: String,
    userPass: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);