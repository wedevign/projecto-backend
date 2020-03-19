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

module.exports = router;