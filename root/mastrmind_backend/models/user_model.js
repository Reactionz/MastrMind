const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true, minlength: 5},
    userName: {type: String, required: true},
    fullName: {type: String},
    birthDate: {type: Date},
    phoneNumber: {type: String},
    profilePicture: {type: String, 
        default: "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-1.png"},
    bio: {type: String, maxlength: 160},
    badgeCount: {type: Number, default: 0, required: true},
    badge: [{ type: mongoose.Schema.Types.ObjectID, ref: 'badge'}],
    task: [{type: mongoose.Schema.Types.ObjectID, ref: 'task'}],
    event: [{type: mongoose.Schema.Types.ObjectID, ref: 'event'}]
});

module.exports = User = mongoose.model("users", userSchema);