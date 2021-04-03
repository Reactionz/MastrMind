const router = require("express").Router();
const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../mware/auth");

router.post("/register", async (req,res) => {
    try {
        // Registration Process Validation
        console.log("registering account");

        let { email, password, verifyPassword, username } = req.body; // Destructing these variables

        console.log(req.body)
        if (!email || !password || !username ) {
            console.log('not all fields')
            return res.status(400).json({ msg: "Not all fields have been entered."});
        }

        if (password.length < 5) {
            console.log("password not long enough")
            return res.status(400).json({ msg: "The password needs to be at least 5 characters long!"});
        }

        if (password !== verifyPassword) {
            console.log("this is not the same password")
            return res.status(400).json({ msg: "Enter the same password twice for correct verification."});
        }

        const existingUser = await User.findOne({email: email});     // going to find if there is an existing user in our database

        if (existingUser) {
            console.log("there is already an existing user")
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
            userName: username
        });
        // console.log(passwordHash);
        // then save.
        const savedUser = await createdUser.save();
        // res.json(savedUser);

        // sign our token
        const token = jwt.sign(
            {
                id: savedUser._id
            }, 
            process.env.JWT_SECRET
        );

        // send token through a cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).send();

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// to login our user

router.post('/login', async (req, res) => {
    try {
        const { email , password } = req.body;

        // do validation

        if (!email || !password) {
            console.log("not all")
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }

        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
            return res.status(400).json({ msg: "No account with this email exists." });
        }

        const compareHash = await bcrypt.compare( password, existingUser.password);

        if (!compareHash) {
            return res.status(400).json( {msg: "Invalid credientials." });
        }

        const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET);

        // send the token as a cookie

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).send();

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// route to be able to log out our users.

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none"
    }
    ).send();
})
// route to get our specific user

router.get("/profile/:profileId", auth, (req, res) => {
    
    User.findById(req.params.profileId, (user, err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(user);
        }
    })
})

// Contains an authentication middleware to verify 
// the user is logged in to delete their account.


// TODO: Going to work on the possibility of deleting accounts but I don't want to cause any problems in our database.
// Maybe add this in our authentication file as it would be something that you can only do if you are loggedIn.

// router.delete("/delete", async (req, res) => {
//     // verify the jwt first before deleting any accounts
//     // console.log(req.user);
//     try {
//         const deletedUser = await User.findByIdAndDelete(req.user);
//         res.json(deletedUser);
//     } catch (err) {
//         res.status(500).json({error: err.message});
//     }
// });

// // User Validation
router.get("/loggedIn", (req, res) => {
    try {

        const token = req.cookies.token;
        console.log(`here is our token: ${token}`)
        if (!token) return res.json(false);
        
        console.log("verifying the token")
        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    } catch (err) {
      res.json(false);
    }
  });

// Once a user is logged in, certain things will not be able to be done
// for a user that is not logged in or does not exist.
// router.get("/profile", auth, (req, res) => {
//     try {
//         const currentUser = req.user;
//         console.log(currentUser);
//     } catch (err) {
//         res.status(500).json({error: err.message});
//     }
// })

module.exports = router;
