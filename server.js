var express = require('express');
var app = express();

var router = express.Router();

router.get('/',function(req,res){
	res.send('It Works!');
});

router.get('/:name',function(req,res){
	res.send('hello: ' + req.params.name);
});

app.use('/',router);

app.listen(8080);
console.log('Listening on port 8080');