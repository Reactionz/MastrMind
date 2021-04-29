/*const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

app.use(cookieParser());

const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 30) : 3001;

app.listen(PORT, () => {
    console.log(`the server is listening at ${PORT}!`)
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
    
}, (err) => {
    if(err) throw err;
    console.log("Connected to Mongo");
});

app.use("/auth", require("./routes/user_router")); */
