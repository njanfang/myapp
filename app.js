var express = require('express');
var app = express();app.get('/', function (req, res) {
  res.send('it s very exciting to do it njanfang!!10');
});app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
