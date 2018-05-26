var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
// app.use('/store', function(req, res, next){
//     console.log('Jestem pośrednikiem przy żądaniu do /store');
//     next();
// });

app.get('/', function(req, res) {
    res.render('index');
});


app.get('/auth/google', function (req, res) {
    res.render('app', {
        user: req.query.username,
        password: req.query.password
	});
});
app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});