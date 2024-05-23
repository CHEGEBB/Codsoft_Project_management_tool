// backend/models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    projectCategory: { type: String, required: true },
    projectStartDate: { type: Date, required: true },
    projectEndDate: { type: Date, required: true },
    notificationSent: { type: String, required: true },
    taskAssignPerson: { type: String, required: true },
    budget: { type: String, required: true },
    priority: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
