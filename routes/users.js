var express = require('express');
var router = express.Router();
const knex = require('../db')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  knex('users')
        .select('*')
        .then(users => res.json(users))
        .catch(err => next(err))
});
router.post('/', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  const { userName, passWord } = req.body;
  knex('users')
      .insert({
        userName,
        passWord
      })
      .returning('*')
      .then(user => res.json(user))
      .catch(err=>next(err))
})
module.exports = router;
