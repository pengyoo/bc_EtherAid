var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home | EtherAid' });
});

/* GET about page. */
router.get('/news', async function (req, res, next) {


  const options = {
    method: 'GET',
    url: 'https://google-news13.p.rapidapi.com/latest',
    params: { lr: 'en-US' },
    headers: {
      'X-RapidAPI-Key': '108f64079bmshe074fe22625578bp1bd533jsn6eb95e1e42ac',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  };

  let news;

  try {
    response = await axios.request(options);
    news = response.data.items;
    console.log(news);
  } catch (error) {
    console.error(error);
  }
  res.render('news', { title: 'News | EtherAid', "news": news });
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
