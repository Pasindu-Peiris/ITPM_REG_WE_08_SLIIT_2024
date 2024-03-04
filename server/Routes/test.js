const router = require("express").Router();
const test = require('../models/test');

router.route("/add").post(async ( req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    const newTest = new test({name, age});

    newTest.save().then(()=> {
        res.json("add")
    }).catch((err) => {
        res.json("not")
    })

})

module.exports = router;