const router = require('express').Router();
const db = require("../config/database");
const User = require("../models/User");
const Token = require("../models/Token");

router.get('/all', async (req, res) => {
    const users = await User.findAll({
        attributes:{
            exclude: ['password']
        },
        raw: true
    });
    res.send(users);
});

router.get('/:email', async (req, res) => {
    // const users = await User.findAll({
    //     attributes:{
    //         where: {
    //             email: req.body.email
    //         },
    //         exclude: ['password']
    //     },
    //     raw: true
    // });
    // res.send(users[0]);
    try {
        const userEmail = req.params.email;
        const users = await User.findAll({
            where: {
                email: userEmail
            },
            attributes:{
                exclude: ['password']
            }
        });
        // const Id = users[0].id;
        // const authToken = await Token.findAll({
        //     where: {
        //         userId: Id
        //     }
        // }); 
        res.send(users[0]);
    } catch (error) {
        res.send([error]);
    }
});

router.get('/:email/token', async (req, res) => {
    try {
        const userEmail = req.params.email;
        const users = await User.findAll({
            where: {
                email: userEmail
            },
            attributes:{
                exclude: ['password']
            }
        });
        const Id = users[0].id;
        const authToken = await Token.findAll({
            where: {
                userId: Id
            }
        }); 
        res.send(authToken);
    } catch (error) {
        res.send([error]);
    }
});

module.exports = router;