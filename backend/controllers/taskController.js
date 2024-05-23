// backend/controllers/taskController.js
const Task = require('../models/Task');

// Function to create a new task
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
