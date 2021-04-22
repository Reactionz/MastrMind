const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskTitle: {type: String, required: true},
    taskDescription: {type: String},
    taskLocation: {type: String, maxLength:40},
    user: [{type: mongoose.Schema.Types.ObjectID, ref: 'user'}]
});

module.exports = Task = mongoose.model("task", taskSchema);