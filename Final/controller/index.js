const express = require("express");
const router = express.Router();

const User = require("../model/user");
const Game = require("../model/game");

router.use("/register", require("./user"));

router.post("/login", (req, res) => {
    Promise.resolve(User.validate(req.body.un, req.body.pw)).then(function(value) {
        if(value != '') {
            req.session.id = value[0].idusers;
            req.session.username = value[0].username;
            req.session.password = value[0].password;
            res.render('Home');
        } else {
            //error
        }
    })
})
router.get("/", (req, res) => {
    if(req.session.username) {
        res.render('Home');
    } else {
        res.render('Login');
    }
})
router.get("/home", (req, res) => {
    res.render('Home');
})
router.get("/difficulty", (req, res) => {
    res.render('Difficulty');
})
router.get("/easy", (req, res) => {    
    Promise.resolve(Game.generate()).then(function(value) {
        var data = '';
        for(var i = 0; i < value.length; i++) {
            data += value[i].texts + "|";
        }
        res.render('GameEasy', {
            array: data
        }); 
    });
})
router.get("/medium", (req, res) => {
    Promise.resolve(Game.generate()).then(function(value) {
        var data = '';
        for(var i = 0; i < value.length; i++) {
            data += value[i].texts + "|";
        }
        res.render('GameMedium', {
            array: data
        }); 
    });
})
router.get("/hard", (req, res) => {
    Promise.resolve(Game.generate()).then(function(value) {
        var data = '';
        for(var i = 0; i < value.length; i++) {
            data += value[i].texts + "|";
        }
        res.render('GameHard', {
            array: data
        }); 
    });
})
router.get("/profile", (req, res) => {
    Promise.resolve(User.getUser(req.session.username)).then(function(profile) {
        Promise.resolve(User.getEasy(req.session.username)).then(function(easy) {
            Promise.resolve(User.getMedium(req.session.username)).then(function(medium) {
                Promise.resolve(User.getHard(req.session.username)).then(function(hard) {
                    console.log(profile);
                    res.render('Profile', {
                        name : profile[0].username,
                        game : profile[0].gamesplayed,
                        easy : easy[0].wpm + "|" + easy[0].time + "|" + easy[0].accuracy,
                        medium : medium[0].wpm + "|" + medium[0].time + "|" + medium[0].accuracy,
                        hard : hard[0].wpm + "|" + hard[0].time + "|" + hard[0].accuracy
                    });
                })
            })
        })
    })
})
router.get("/ranking", (req, res) => {
    res.render('Leaderboard');
})
router.get("/logout", (req, res) => {
    console.log("logging out");
    req.session.destroy();
    res.render('Login');
})

module.exports = router;