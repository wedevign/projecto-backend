const router = require('express').Router();
const db = require("../config/database");
const User = require("../models/User");

router.get('/all', (req, res) => {
    res.send('nibb');
});

module.exports = router;