const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

// Setup Express for use
const app = express();
app.use(express.json());    // This allows us to use JSON.

// Accepted Origins for our application
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
}));

app.use(express.static(path.join(__dirname, "mastrmind-frontend", "build")))

app.use(cookieParser());

const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 30) : 3001;

app.listen(PORT, () => {
    console.log(`the server is listening at ${PORT}!`)
});
// Setup Mongoose

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, function (err, client){
    if(err) throw err;
    console.log("MongoDB connection works!!");
});

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });
})
// Setup all routes to be used.

app.use("/auth", require("./routes/user_router"));
app.use("/journal", require("./routes/journal_router"));