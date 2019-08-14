const express = require("express");
const router = express.Router();

const Game = require("../model/game"); 

router.get("/", (req, res) => {
    res.render("Admin");
})

router.get("/database", (req, res) => {
    res.render("AdminDatabase");
})

router.get("/ranking", (req, res) => {
    Promise.resolve(Game.getEasy()).then(function(easy) {
        Promise.resolve(Game.getMedium()).then(function(medium) {
            Promise.resolve(Game.getHard()).then(function(hard) {
                var data = [];
                data.push(easy);
                data.push(medium);
                data.push(hard);
                res.render('AdminRankings', {
                    object : JSON.stringify(data)
                });
            })
        })
    })
})

module.exports = router;