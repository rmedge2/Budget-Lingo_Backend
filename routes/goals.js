var express = require('express');
var router = express.Router();
const knex = require('../db')
const cors=require('cors')


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    knex('goals')
        .select('*')
        .then(logs => res.json(logs))
        .catch(err => next(err))
});

router.options('/', cors())

router.post('/', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    const { userId,name, amount, deadline } = req.body;
    console.log(req.body)
    knex('goals')
        .insert({
            userId,
            name,
            amount,
            deadline
        })
        .returning('*')
        .then(log => res.json(log))
        .catch(err=>next(err))
})

module.exports = router;
