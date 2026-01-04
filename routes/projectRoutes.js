const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const adminAuth = require("../middleware/adminAuth"); // আপনার এডমিন মিডলওয়্যার

/**
 * @route   GET /api/projects
 * @desc    Get all projects (Public)
 */
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }); // নতুন প্রজেক্ট আগে দেখাবে
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/**
 * @route   GET /api/projects/:id
 * @desc    Get single project details (Public)
 */
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/**
 * @route   POST /api/projects
 * @desc    Add a new project (ADMIN ONLY)
 */
router.post("/", adminAuth, async (req, res) => {
  try {
    // ক্রেডেনশিয়াল বা ফিচার লিস্ট যদি স্ট্রিং হিসেবে আসে তবে সেটাকে অ্যারে/অবজেক্টে কনভার্ট করার লজিক ফ্রন্টএন্ডেই হ্যান্ডেল করা হয়েছে।
    // তাই এখানে সরাসরি সেভ করা যাবে।
    
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    
    res.status(201).json({
      success: true,
      message: "Project added successfully! 🚀",
      data: savedProject,
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add project",
    });
  }
});

/**
 * @route   DELETE /api/projects/:id
 * @desc    Delete a project (ADMIN ONLY)
 */
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    
    if (!deletedProject) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, message: "Project deleted successfully 🗑️" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;