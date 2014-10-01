var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/',function(req,res){
	res.send('It Works!');
});

router.get('/:name',function(req,res){
	res.send('hello: ' + req.params.name);
});

app.use('/',router);

app.listen(port);
console.log('Listening on port ' + port);