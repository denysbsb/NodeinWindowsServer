var express = require('express');
const path = require('path');
var app = express();
var cors = require('cors');
app.use(cors());
var rp = require('request-promise');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// router
app.get('/', function(req, res) {
    res.send('Inicio ROUTE API');
});

app.get('/auth', function(req, res) {
        console.log('getTOKEN--',req.query.code);
        console.log('getRedirect--',req.query.redirect_uri);
        rp({
            url: 'https://homolog.sgi.sebrae.com.br/OAuth_Authorization/OAuth/Token',
            headers: {
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'Basic MTExOkVUMXhBWlh3Z0pSb1dmMVB6cjlp',
              'accept': '*/*',
              'client_id': '65',
              'client_secret': 'vQwAtkQmMl7F-RhsWhRf'
            },
            form: {
                redirect_uri: req.query.redirect_uri,
                grant_type:'authorization_code',
                code: req.query.code,
                client_id:'65',
                client_secret:'vQwAtkQmMl7F-RhsWhRf'
            },
            method:'POST',
            json: true
            })
        .then(function (resp) {
           // console.log('API get--',resp);
           console.log('suceess--', resp);
            res.json(resp)
        })
        .catch(function (err) {
            console.log('err--');
           // console.log('err get--',err);
            res.json({nome:'err World!'})
        });
});

app.get('/teste', function(req, res) {
    res.json({name:'ateCUBA'});
});

app.listen(process.env.PORT || 3001, () => console.log('Running Angular'));
