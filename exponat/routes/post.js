var express = require('express');
var fs = require('fs');
var path = require('path')
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var data = req.body;
  var file = path.join(process.cwd(), 'data', 'text.txt');
  fs.appendFile(file, data, (err) => {
    if (err) throw err;
  });

  res.type('text/plain');
  res.send(data);
});

module.exports = router;
