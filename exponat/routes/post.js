var express = require('express');
var fs = require('fs');
var path = require('path')
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var data = req.body;
  var file = path.join(process.cwd(), 'data', 'text.txt');

  if ((data === "#") || (data === "\#") || (data === "\\#")) {
    fs.readFile(file, 'utf8', (err, d) => {
      if (err) throw err;

      if (d.substr(d.length -4) === "\<br\>") {
        data = d.substr(0, d.length -4);
      } else {
        data = d.substr(0, d.length -1);
      }

      fs.writeFile(file, data, 'utf8', (err) => {
        if (err) throw err;
      });
    });
  }
  else {
    fs.appendFile(file, data, (err) => {
      if (err) throw err;
    });
  }

  res.type('text/plain');
  res.send(data);
});

module.exports = router;
