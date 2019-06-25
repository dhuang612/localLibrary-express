var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('you made it to the users page');
});

router.get('/cool', function(req, res) {
  res.send('You are too cool');
});
module.exports = router;
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//create a new template under views and display the information.
 res.render('message', { message: 'you made it to the users/cool page' });
*/
