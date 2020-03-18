const router = require('express').Router();
const db = require("../config/database");
const User = require("../models/User");

router.get('/all', async (req, res) => {
    const users = await User.findAll();
    res.send(JSON.stringify(users, null, 2));
});

module.exports = router;