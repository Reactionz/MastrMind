const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    // fill fields that will be needed for our application
    title: { type: String, requried: true },
    description: {type: String},
    startDate: {type: Date, required: true},
    endDate: {type: Date}, // not sure if i need to require the end date.
    location: {type: String, maxLength: 40}
});

module.exports = Event = mongoose.model("event", eventSchema);