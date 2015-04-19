var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine','jade');

//We're creating a route handler for the home path, / is the default homepage
app.get('/', function(req, res){
    res.render('index', {title : 'My Page'});
});

app.listen(3000);
console.log('Server Listening at 127.0.0.1:3000');
