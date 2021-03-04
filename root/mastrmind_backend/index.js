const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();


// Setup Express for use
const app = express();
app.use(express.json());    // This allows us to use JSON.
app.use(cors());

const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 30) : 3000;

app.listen(PORT, () => {
    console.log(`the server is listening at ${PORT}!`)
});

// Setup Mongoose

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if(err) throw err;
    console.log("MongoDB connection works!!");
});

// Setup all routes to be used.

app.use("/users", require("./routes/user_router"));