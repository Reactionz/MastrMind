const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();


// App Configuration

const app = express();
app.use(express.json());    // This allows us to use JSON.

// Accepted Origins for our application
app.use(cors({
    origin: ["http://localhost:3001"],
    credentials: true,
}));

app.use(cookieParser());

const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 30) : 3001;

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

app.use("/auth", require("./routes/user_router"));