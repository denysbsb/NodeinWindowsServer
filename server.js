var express = require('express');

const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/teste', function (req, res) {
    res.send('Express is working on IISNode!');
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 3001, () => console.log('Running Angular'));
