const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencoder = bodyParser.urlencoded({
    extended: true
})
var app = express();
const User = require("../model/user");
const Game = require("../model/game");

router.use(urlencoder);
router.use("/register", require("./user"));

router.post("/login", (req, res) => {
    Promise.resolve(User.validate(req.body.un, req.body.pw)).then(function(value) {
        if(value != '') {
            res.render('Home');
        } else {
            //error
        }
    })
})
router.get("/", (req, res) => {
    res.render('Login');
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
    res.render('Profile');
})
router.get("/ranking", (req, res) => {
    res.render('Leaderboard');
})

module.exports = router;