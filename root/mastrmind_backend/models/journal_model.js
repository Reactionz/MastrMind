const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
    journalTitle: {type: String },
    journalEntry: {type: Object, default: {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}, required: true },
    journalColor: {type: String},
    user: {type: mongoose.Schema.Types.ObjectID, ref: 'users'}
}, { minimize: false,});

module.exports = Journal = mongoose.model("journals", journalSchema);