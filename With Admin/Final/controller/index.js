const express = require("express");
const router = express.Router();

const User = require("../model/user");

router.use("/game", require("./game"));
router.use("/typericer", require("./typericer"));

router.post("/register", (req, res) => {
    User.create(req.body.user, req.body.pass);
    req.session.username = req.body.user;
    req.session.password = req.body.pass;
    res.redirect("/typericer");
})
router.post("/login", (req, res) => {
    Promise.resolve(User.validate(req.body.un, req.body.pw)).then(function(value) {
        if(value != '') {
            req.session.username = value[0].username;
            req.session.password = value[0].password;            
        } 
        res.redirect("/typericer");
    })
})
router.get("/guest", (req, res) => {
    Promise.resolve(User.getUser('guest')).then(function(value) {
        req.session.username = value[0].username;
        res.redirect("/typericer");
    })
})
router.get("/", (req, res) => {
    res.redirect("/typericer");
})
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

module.exports = router;