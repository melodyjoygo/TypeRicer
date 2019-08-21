const express = require("express");
const router = express.Router();

const User = require("../model/user");
const Game = require("../model/game"); 

router.get("/", (req, res) => {
    if(req.cookies) {
        if(req.session.username || req.cookies.username) {
            res.render('Home');
        } else {
            res.render('Login');
        }
    } else {
        res.render('Login');
    }
})
router.get("/difficulty", (req, res) => {
    res.render('Difficulty');
})
router.get("/profile", (req, res) => {
    if(req.session.username != 'guest' && req.cookies.username) {
        Promise.resolve(User.getUser(req.cookies.username)).then(function(profile) {
            Promise.resolve(User.getEasy(req.cookies.username)).then(function(easy) {
                Promise.resolve(User.getMedium(req.cookies.username)).then(function(medium) {
                    Promise.resolve(User.getHard(req.cookies.username)).then(function(hard) {
                        var data = [];
                        data.push(profile);
                        data.push(easy);
                        data.push(medium);
                        data.push(hard);
                        res.render('Profile', {
                            name : profile[0].username,
                            game : profile[0].gamesplayed,
                            object : JSON.stringify(data)
                        });
                    })
                })
            })
        })
    } else if(req.session.username == 'guest') {
        Promise.resolve(User.getUser(req.session.username)).then(function(profile) {
            Promise.resolve(User.getEasy(req.session.username)).then(function(easy) {
                Promise.resolve(User.getMedium(req.session.username)).then(function(medium) {
                    Promise.resolve(User.getHard(req.session.username)).then(function(hard) {
                        var data = [];
                        data.push(profile);
                        data.push(easy);
                        data.push(medium);
                        data.push(hard);
                        res.render('Profile', {
                            name : profile[0].username,
                            game : profile[0].gamesplayed,
                            object : JSON.stringify(data)
                        });
                    })
                })
            })
        })
    } else {
        res.redirect("/");
    }
})
router.get("/ranking", (req, res) => {
    Promise.resolve(Game.getEasy()).then(function(easy) {
        Promise.resolve(Game.getMedium()).then(function(medium) {
            Promise.resolve(Game.getHard()).then(function(hard) {
                var data = [];
                data.push(easy);
                data.push(medium);
                data.push(hard);
                res.render('Leaderboard', {
                    object : JSON.stringify(data)
                });
            })
        })
    })
})

module.exports = router;
