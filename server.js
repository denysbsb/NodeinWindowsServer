var express = require('express');
const path = require('path');
var app = express();
var cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

var rp = require('request-promise');

app.use(express.static(path.join(__dirname, 'dist')));

// router
app.use('/', require('./routes'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start nas rotinas
var Rotinas = require('./controllers/Rotinas').start();

app.listen(process.env.PORT || 3001, () => console.log('Running Angular'));
