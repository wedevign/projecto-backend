const router = require('express').Router();
const CryptoJS = require('crypto-js');

const User = require("../models/User");
const Token = require("../models/Token");

const config = require('../config/config');

router.post('/register',async (req, res) => {
    // First, we check if email is already registered in the database.
    if(await accountExists(req.body.email)) {
        res.json({error: "The account already exists"});
        return;
    }


    var password = req.body.password;
    password = CryptoJS.MD5(password).toString();
    const user = User.build({email: req.body.email, password: password, role: req.body.role, firstname: req.body.firstname, lastname: req.body.lastname});
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
    password = password = CryptoJS.MD5(password).toString();
    User.findAll({
        where: {
            email: email 
        }, raw: true
    }).then(async (user) => {
        if(user.length == 0) {
            res.json({error: "The credentials were incorrect"});
            return;
        }
        var fetchedPassword = user[0]['password'];
        var userId = user[0]['id'];

        var authKey = await createAuth(16);
        if(password == fetchedPassword) {
            var expiration = (Date.now() + 3600000);
            const token = Token.build({userId: userId, authToken: authKey, expirationDateTime: expiration });
            token.save();
            res.json({
                authtoken: authKey,
                expirationDateTime: expiration
            });
        } else {
            res.json({error: "The credentials were incorrect"});
        }
    });
});

async function accountExists(email) {
    var exists = false;
    await User.findAll({
        where: {
            email: email 
        }, raw: true
    }).then((user) => {
        if(user.length == 0) exists = false;
        else exists = true;
    });
    return exists;
}

function createAuth(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

module.exports = router;