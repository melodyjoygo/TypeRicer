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
router.use("/register/", require("./user"));

router.post("/login", (req, res) => {
    var test = User.validate(req.body.un, req.body.pw);
    if(test) {
        res.render('Home');
    }
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
    var data = Game.generate();
    console.log(data);
    res.render('GameEasy');
})
router.get("/medium", (req, res) => {
    res.render('GameMedium');
})
router.get("/hard", (req, res) => {
    res.render('GameHard');
})
router.get("/profile", (req, res) => {
    res.render('Profile');
})
router.get("/ranking", (req, res) => {
    res.render('Leaderboard');
})

module.exports = router;