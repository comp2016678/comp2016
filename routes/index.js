var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Comp2068 - Homepage' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Comp2068 - About' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Comp2068 - Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Comp2068 - Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Comp2068 - Contact' });
});
module.exports = router;
