const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // Import the Project model
const { getProjects, createProject } = require('../controllers/projectController');

// POST route to create a new project
router.post('/', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
