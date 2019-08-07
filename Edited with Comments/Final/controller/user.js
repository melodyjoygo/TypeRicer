const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencoder = bodyParser.urlencoded({
    extended: true
})
const User = require("../model/user");

router.use(urlencoder);
router.post("/", (req, res) => {
    User.create(req.body.user, req.body.pass);
    req.session.username = req.body.user;
    req.session.password = req.body.pass;
    res.render('Home'); 
})

module.exports = router;