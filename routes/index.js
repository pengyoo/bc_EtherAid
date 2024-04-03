var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to Web3 BootStrap App', name: null });
});

router.post('/', function (req, res, next) {

  res.render('index', { title: 'Welcome to Web3 BootStrap App', name: req.body.name });
});



router.get('/address', function (req, res, next) {
  res.render('address', { title: 'Welcome to Web3 BootStrap App', name: null });
});

router.get('/web3', function (req, res, next) {
  res.render('web3', { title: 'Welcome to Web3 BootStrap App', name: null });
});

router.get('/create', function (req, res, next) {
  res.render('create', { title: 'Welcome to Web3 BootStrap App', name: null });
});




router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Welcome to Web3 BootStrap App', name: null });
});




module.exports = router;
