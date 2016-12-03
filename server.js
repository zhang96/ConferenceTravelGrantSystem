var express = require('express');

var app = express();
var path = require('path');

// Set the default port to localhost 3000.
app.set('port', process.env.PORT || 3000);

// View engine setup
app.set('views', path.join(__dirname, 'views'));


// Serving all public content only from ./public
app.use(express.static(path.join(__dirname, 'public')));

// Default landing page
app.get('/', function (req, res) {
    res.render('index');
});

// Sample request.
app.post('/request', function (req, res) {
	
});

// Custom 404 page.
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// Custom 500 page.
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// Start the server
app.listen(app.get('port'), function () {
    console.log('Express started.');
});