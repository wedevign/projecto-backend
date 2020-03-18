const router = require('express').Router();
const CryptoJS = require('crypto-js');

const User = require("../models/User");

const config = require('../config/config');

router.post('/register',async (req, res) => {
    var password = req.body.password;
    password = CryptoJS.AES.encrypt(password, config.ENCRYPTION_KEY).toString();
    const user = User.build({email: req.body.email, password: password, firstname: req.body.firstname, lastname: req.body.lastname});
    try {
       await user.save();
    } catch(err) {
        console.log(err);
    }
    res.sendStatus(200);
});

router.post('/login', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    const users = await User.findAll({
        attributes: ['email', 'password'],
        where: {
            email: email
        }
    });
    console.log(JSON.stringify(users[0], null, 2));
});

module.exports = router;