const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true, minlength: 5},
    userName: {type: String, required: true},
    birthDate: {type: Date},
    phoneNumber: {type: String},
    bio: {type: String, maxlength: 160},
    badgeCount: {type: Number, default: 0, required: true},
    badge: [{ type: mongoose.Schema.Types.ObjectID, ref: 'badge'}],
    task: [{type: mongoose.Schema.Types.ObjectID, ref: 'task'}],
    event: [{type: mongoose.Schema.Types.ObjectID, ref: 'event'}]
});

module.exports = User = mongoose.model("user", userSchema);