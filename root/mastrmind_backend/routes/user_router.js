const router = require("express").Router();
const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../mware/auth");

router.post("/register", async (req,res) => {
    try {
        // Registration Process Validation

        let { email, password, verifyPassword, username } = req.body; // Destructing these variables
        console.log(req.body);
        if (!email || !password || !username ) {
            console.log('not all fields')
            return res.status(400).json({ msg: "Not all fields have been entered."});
        }

        if (password.length < 5) {
            return res.status(400).json({ msg: "The password needs to be at least 5 characters long!"});
        }

        if (password !== verifyPassword) {
            return res.status(400).json({ msg: "Enter the same password twice for correct verification."});
        }

        const existingUser = await User.findOne({email: email});     // going to find if there is an existing user in our database

        if (existingUser) {
            return res.status(400).json({ msg: "An account with this email already exists. "});
        }

        if (!username) {
            username = email;
        }

        // Generate a bcrypt salt.
        const bcryptSalt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, bcryptSalt);   // hash the password

        // create an object of the new user
        const createdUser = new User({
            email, 
            password: passwordHash,
            username
        });
        // console.log(passwordHash);
        // then save.
        const savedUser = await createdUser.save();
        res.json(savedUser);


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// to login our user

router.post('/login', async (req, res) => {
    try {
        const {email , password } = req.body;

        // do validation

        if (!email || !password) {
            console.log("not all")
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            console.log("bruh");
            return res.status(400).json({ msg: "No account with this email exists." });
        }

        const compareHash  = await bcrypt.compare( password, user.password);

        if (!compareHash) {
            console.log("bruh invalid hash");
            return res.status(400).json( {msg: "Invalid credientials." });
        }

        const jwtToken = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        // console.log(jwtToken)
        res.json({
            jwtToken, 
            user: {
                id: user._id,
                username: user.username,
            },
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Retrieve all users.
router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);

    res.json({
        username: user.username,
        id: user._id
    }
    );
});

// Contains an authentication middleware to verify 
// the user is logged in to delete their account.

router.delete("/delete", auth, async (req, res) => {
    // verify the jwt first before deleting any accounts
    // console.log(req.user);
    try {
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// User Validation
router.post("/isTokenValid", async (req, res) => {
    try { 
        const jwtToken = req.header("x-auth-token");

        if(!jwtToken) {
            return res.json(false);
        }

        const verifyJWT = jwt.verify(jwtToken, process.env.JWT_SECRET);
        if(!verifyJWT) {
            return res.json(false);
        }

        const user = await User.findById(verifyJWT.id);

        if (!user) {
            return res.json(false);
        }

        return res.json(true);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
});


module.exports = router;
