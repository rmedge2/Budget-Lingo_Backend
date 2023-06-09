var express = require('express');
var router = express.Router();
const knex = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
    knex('logs')
        .select('*')
        .then(logs => res.json(logs))
        .catch(err => next(err))
});
router.post('/', (req, res, next) => {
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
