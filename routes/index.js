var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home | EtherAid' });
});

/* GET address page. */
router.get('/address', function (req, res, next) {
  res.render('address', { title: 'Address | EtherAid' });
});

/* GET create project page. */
router.get('/create', function (req, res, next) {
  res.render('create', { title: 'Start a project | EtherAid' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About | EtherAid' });
});




module.exports = router;
