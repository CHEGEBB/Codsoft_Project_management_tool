// backend/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    Task_No: { type: String, required: true },
    projectName: { type: String, required: true },
    client: { type: String, required: true },
    status: { type: String, required: true },
    type: { type: String, required: true },
    priority: { type: String, required: true },
    assignedTo: { type: String, required: true },
    dueDate: { type: Date, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
