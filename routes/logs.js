var express = require('express');
var router = express.Router();
const knex = require('../db')
const cors=require('cors')


// router.options('/', cors())

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    knex('logs')
        .select('*')
        .then(logs => res.json(logs))
        .catch(err => next(err))
});

router.options('/', cors())

router.post('/', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    const { userId, name, amount, time } = req.body;
    console.log(req.body)
    knex('logs')
        .insert({
            userId,
            name,
            amount,
            time
        })
        .returning('*')
        .then(log => res.json(log))
        .catch(err=>next(err))
})

module.exports = router;
