const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    // fill fields that will be needed for our application
    eventTitle: { type: String, required: true },
    eventDescription: {type: String},
    eventStartDate: {type: Date, required: true},
    eventEndDate: {type: Date}, // not sure if i need to require the end date.
    eventLocation: {type: String, maxLength: 40},
    user: [{type: mongoose.Schema.Types.ObjectID, ref: 'user'}]
});

module.exports = Event = mongoose.model("event", eventSchema);