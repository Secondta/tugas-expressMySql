var express = require('express');
var router = express.Router();

var connection = require('../library/database')


/* GET users listing. */
router.get('/', function (req, res, next) {

  connection.query('select * from users order by id desc', function (err, rows) {
    if (err) {
      req.flash('error', err)
      req.render('user', {
        data: ''
      })
    } else {
      // render
      res.render('users', {
        data: rows
      })
    }
  })
});

module.exports = router;