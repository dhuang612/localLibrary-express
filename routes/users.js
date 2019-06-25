var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res) {
  res.send('you made it to the users page');
});

router.get('/cool', function(req, res) {
  res.send('You are too cool');
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
module.exports = router;

//create a new template under views and display the information.
//res.render('message', { message: 'you made it to the users/cool page' });
