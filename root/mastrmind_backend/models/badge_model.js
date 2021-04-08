const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
    /// fill with information that might be needed for our achievement badges
});

module.exports = Badge = mongoose.model("badge", badgeSchema);