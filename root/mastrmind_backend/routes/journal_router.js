const router = require("express").Router();
const User = require("../models/user_model");
const Journal = require("../models/journal_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const auth = require("../mware/auth");
const mongoose = require("mongoose")

//  Get Journal By ID
router.get("/getJournal/:journalId", async (req, res) => {
    try {
        const journal = await Journal.findById(req.params.journalId);
        
        if(!journal) {
            return res.status(400).json({msg: "No journal exists!"});
        }

        console.log("getting journal")
        console.log(journal);

        res.send(journal);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.post("/saveJournal", auth, async (req, res) => {
    try {
        let { currentUser } = req.id;
        let { journalTitle, journalEntry, journalColor } = req.body;

        if ( !journalTitle || !journalColor ) {
            return res.status(400).json({ msg: "An object needs to be sent!"})
        }
        
        if ( !currentUser ) {
            return res.status(403).json({msg: "Unauthorized to do this request. "})
        }

        const createdJournal = new User({
            journalTitle: journalTitle,
            journalEntry: journalEntry,
            journalColor: journalColor,
            user: currentUser
        })

        const savedJournal = await createdJournal.save();

        res.send(savedJournal);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// router.post("/createFirstJournal", async (req, res) => {
//     try {
//         const createJournal = new Journal({
            // journalTitle:"First Journal",
            // journalEntry:"lorem ipsum blah blah blah",
            // journalColor:"#1d56f0",
            // user: mongoose.Types.ObjectId('60a743770678a6538dfe9c1d')
//         });

//         const newJournal = createJournal.save();
//         res.send(newJournal);

//     } catch (err) {
//         res.status(500).json({error: err.message})
//     }
// });

module.exports = router;