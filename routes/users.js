const router = require('express').Router();
const db = require("../config/database");
const User = require("../models/User");

router.get('/all', async (req, res) => {
    const users = await User.findAll({
        attributes:{
            exclude: ['password']
        },
        raw: true
    });
    res.send(users);
});

router.get('/userbyemail', async (req, res) => {
    const users = await User.findAll({
        attributes:{
            where: {
                email: req.body.email
            },
            exclude: ['password']
        },
        raw: true
    });
    res.send(users[0]);
});

module.exports = router;