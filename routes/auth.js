const router = require('express').Router();
const User = require("../models/User");

router.post('/register',async (req, res) => {
    const user = User.build({email: req.body.email, password: req.body.password, firstname: req.body.firstname, lastname: req.body.lastname});
    try {
        await user.save();
    } catch(err) {
        console.log(err);
    }
    res.sendStatus(200);
});

router.post('/login', (req, res) => {
    res.send('Login');
});

module.exports = router;