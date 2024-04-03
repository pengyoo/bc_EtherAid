var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  res.render('project', { title: 'Projects | EtherAid', id: id });
});

module.exports = router;
