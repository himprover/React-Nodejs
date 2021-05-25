var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    console.log("http://localhost:4000/api/");
    res.send({title: 'hello'});
});

module.exports = router;