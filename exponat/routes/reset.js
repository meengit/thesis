var express = require('express');
var fs = require('fs');
var path = require('path')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var file = path.join(process.cwd(), 'data', 'text.txt');
  fs.truncate(file, 0, (err) => {
    if (err) throw err;
  });

  res.type('text/plain');
  res.sendStatus(200);
});

module.exports = router;
