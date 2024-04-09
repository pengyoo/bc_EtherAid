var express = require('express');
var axios = require('axios');
var router = express.Router();
const moment = require('moment');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home | EtherAid' });
});

/* GET about page. */
router.get('/news', async function (req, res, next) {


  const options = {
    method: 'GET',
    url: 'https://gnews.io/api/v4/search?q=crypto&lang=en&max=9&apikey=3a14b5b9e71aa27514f118eebe9e76d8',
  };

  let news;

  try {
    response = await axios.request(options);
    news = response.data.articles;
    console.log(news);
  } catch (error) {
    console.error(error);
  }
  res.render('news', { title: 'News | EtherAid', "news": news, moment });
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
