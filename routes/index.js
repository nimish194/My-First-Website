var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {
  const myarray = {
    name:req.body.name
 }

  res.render('home', { msg : myarray });
});

module.exports = router;
