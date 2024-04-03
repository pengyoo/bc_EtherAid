var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  res.render('project', { title: 'Welcome to Web3 BootStrap App', id: id });
});

module.exports = router;
