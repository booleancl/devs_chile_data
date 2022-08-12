var express = require('express');
var router = express.Router();
var http = require("https");

/* GET users listing. */
router.get('/', function(req, res, next) {
  var req = http.get("https://sueldos-tech-chile-2022.herokuapp.com/v2/answers", function (response) {
    var chunks = [];
    
    response.on("data", function (chunk) {
      chunks.push(chunk);
    });
    
    response.on("error", function(err){
      res.send(error.message)
    })

    response.on("end", function () {
      var body = Buffer.concat(chunks);
      res.send(body.toString());
    });

  });
  
  req.end();
  
});

module.exports = router;
