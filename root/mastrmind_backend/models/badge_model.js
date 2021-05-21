const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
    badgeTitle: {type: String, unique: true, required: true},
    badgeDescription: {type: String, required: true},
    badgePriorityLevel: {type: Number, required: true, default: 1},
    user: [{type: mongoose.Schema.Types.ObjectID, ref: 'user'}]
    /// fill with information that might be needed for our achievement badges
});

module.exports = Badge = mongoose.model("badge", badgeSchema);