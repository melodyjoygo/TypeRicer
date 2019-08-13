const express = require("express");
const router = express.Router();

const User = require("../model/user");
const Game = require("../model/game");

router.post("/register", (req, res) => {
    User.create(req.body.user, req.body.pass);
    req.session.username = req.body.user;
    req.session.password = req.body.pass;
    res.redirect("/home");
})
router.post("/login", (req, res) => {
    Promise.resolve(User.validate(req.body.un, req.body.pw)).then(function(value) {
        if(value != '') {
            req.session.username = value[0].username;
            req.session.password = value[0].password;
            res.redirect("/home");
        } else {
            //error
        }
    })
})
router.post("/endGame", (req, res) => {
    Promise.resolve(User.getUser(req.session.username)).then(function(value) {
        Game.submitData(value[0].idusers, req.body.wpm, req.body.time, req.body.acc, req.body.diff);
        User.updateGamePlayed(value[0].idusers);
    })
})

router.get("/", (req, res) => {
    if(req.session.username) {
        res.redirect("/home");
    } else {
        res.render('Login');
    }
})
router.get("/home", (req, res) => {
    res.render('Home');
})
router.get("/guest", (req, res) => {
    Promise.resolve(User.getUser('guest')).then(function(value) {
        req.session.username = value[0].username;
        res.redirect("/home");
    })
})
router.get("/difficulty", (req, res) => {
    res.render('Difficulty');
})
router.get("/easy", (req, res) => {    
    Promise.resolve(Game.generate()).then(function(value) {
        var data = '', title = '', ids = '';
        for(var i = 0; i < value.length; i++) {
            data += value[i].texts;
            title +=  value[i].title;
            ids += value[i].idtexts;
            if(i < value.length - 1) {
                data += "|";
                title += "|";
                ids += "|"
            }
        }
        res.render('GameEasy', {
            id: ids,
            array: data,
            titles: title
        }); 
    });
})
router.get("/medium", (req, res) => {
    Promise.resolve(Game.generate()).then(function(value) {
        var data = '', title = '', ids = '';
        for(var i = 0; i < value.length; i++) {
            data += value[i].texts;
            title +=  value[i].title;
            ids += value[i].idtexts;
            if(i < value.length - 1) {
                data += "|";
                title += "|";
                ids += "|"
            }
        }
        res.render('GameMedium', {
            id: ids,
            array: data,
            titles: title
        }); 
    });
})
router.get("/hard", (req, res) => {
    Promise.resolve(Game.generate()).then(function(value) {
        var data = '', title = '', ids = '';
        for(var i = 0; i < value.length; i++) {
            data += value[i].texts;
            title +=  value[i].title;
            ids += value[i].idtexts;
            if(i < value.length - 1) {
                data += "|";
                title += "|";
                ids += "|"
            }
        }
        res.render('GameHard', {
            id: ids,
            array: data,
            titles: title
        }); 
    });
})
router.get("/profile", (req, res) => {
    Promise.resolve(User.getUser(req.session.username)).then(function(profile) {
        Promise.resolve(User.getEasy(req.session.username)).then(function(easy) {
            Promise.resolve(User.getMedium(req.session.username)).then(function(medium) {
                Promise.resolve(User.getHard(req.session.username)).then(function(hard) {
                    var temp1 = '', temp2 = '', temp3 = '';
                    for(var i = 0; i < easy.length; i++) {
                        temp1 += easy[i].wpm + ":" + easy[i].time + ":" + easy[i].accuracy
                        if(i < easy.length - 1) {
                            temp1 += "|";
                        }
                    }
                    for(var j = 0; j < medium.length; j++) {
                        temp2 += medium[j].wpm + ":" + medium[j].time + ":" + medium[j].accuracy
                        if(j < medium.length - 1) {
                            temp2 += "|";
                        }
                    }
                    for(var k = 0; k < hard.length; k++) {
                        temp3 += hard[k].wpm + ":" + hard[k].time + ":" + hard[k].accuracy
                        if(k < hard.length - 1) {
                            temp3 += "|";
                        }
                    }
                    res.render('Profile', {
                        name : profile[0].username,
                        game : profile[0].gamesplayed,
                        easy : temp1,
                        medium : temp2,
                        hard : temp3
                    });
                })
            })
        })
    })
})
router.get("/ranking", (req, res) => {
    Promise.resolve(Game.getEasy()).then(function(easy) {
        Promise.resolve(Game.getMedium()).then(function(medium) {
            Promise.resolve(Game.getHard()).then(function(hard) {
                var temp1 = '', temp2 = '', temp3 = '';
                for(var i = 0; i < easy.length; i++) {
                    temp1 += easy[i].username + ":" + easy[i].wpm + ":" + easy[i].time + ":" + easy[i].accuracy
                    if(i < easy.length - 1) {
                        temp1 += "|";
                    }
                }
                for(var j = 0; j < medium.length; j++) {
                    temp2 += medium[j].username + ":" + medium[j].wpm + ":" + medium[j].time + ":" + medium[j].accuracy
                    if(j < medium.length - 1) {
                        temp2 += "|";
                    }
                }
                for(var k = 0; k < hard.length; k++) {
                    temp3 += hard[k].username + ":" + hard[k].wpm + ":" + hard[k].time + ":" + hard[k].accuracy
                    if(k < hard.length - 1) {
                        temp3 += "|";
                    }
                }
                res.render('Leaderboard', {
                    easy: temp1,
                    medium: temp2,
                    hard: temp3
                });
            })
        })
    })
})
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

module.exports = router;