var express = require('express');
var app = express();app.get('/', function (req, res) {
  res.send('it is very exciting to do devops njanfang0');
});app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
