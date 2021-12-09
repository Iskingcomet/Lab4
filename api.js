var express = require('express');
var app = express();

var routes = require('./routes');

app.set('views', __dirname + 'HML');
app.engine('html', require('ejs').renderFile);

app.use('/api', routes);
app.use(express.static('HML'));

app.get('/', (req, res) => {
    res.render("index.html");
 })

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server is running on port ' + port);
   
})