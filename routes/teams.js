const router = require('express').Router();

const Team = require("../models/Team");

router.get("/all", (req, res) => {
    var data = Team.findAll({
        raw: true
    });
    res.json(data);
});

router.post("/update", async (req, res) => {

});

router.post("/register", async (req, res) => {
    if(await userIsAlreadyOwner(req.body.ownerId)) {
        res.json({error: "You already are an owner of a team."}).status(500);
        return;
    }
    if(await teamNameAlreadyExists(req.body.name)) {
        res.json({error: "The given teamname already exists."}).status(500);
        return;
    }
    var team = Team.build({name: req.body.name, ownerId: req.body.ownerId});
    team.save();
    res.sendStatus(200);
});

async function userIsAlreadyOwner(id) {
    var data = await Team.findAll({
        where: {
            ownerId: id
        }
    });
    if(data.length > 0) return true;
    return false;
}

async function teamNameAlreadyExists(name) {
    var data = await Team.findAll({
        where: {
            name: name
        }
    });
    if(data.length > 0) return true;
    return false;
}

module.exports = router;