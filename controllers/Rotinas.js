var rp = require('request-promise');

const Rotinas = {

    start: function() {
        Rotinas.fecharGrupos();
    },

    fecharGrupos: function(){
        rp({
            url: 'http://localhost:3001'+ '/bootfechagrupos'
        })
        .then(function (res) {
            console.log('sucess call');
        })
        .catch(function (err) {
            console.log('Err call');
        });
    }

};

module.exports = Rotinas;
