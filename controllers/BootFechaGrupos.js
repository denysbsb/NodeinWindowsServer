var rp = require('request-promise');
var _ = require('lodash');
var access_token = 'DQVJ2eWpIdy15Ylc0bmpJWFV0alhzX2lWOW9vaWRfVDhZAclZAYdUJTN2hxREFabDVrU1JlTk9FZATNzbk1uVjBhZADlLQkFjNHNZAZAS1rVVhKZAEFHY0RESW5OOW5QN0R1Mk5rNEdBUGQ1Y210ZADlYRV9XYUdNLUV5NU4yNk1NYmNlSDkzdTVwSTVmQ0g0eERJWnhXMmxjSTVKeUJXc3pva2lhYWF0M2tmajhxQTNqNlpyTjQ2cGN0ZAkpFWXhZAaGN2NE1kMERQUVBIU3A5S3NQT1dtZAgZDZD';
var proxyMaquina = 'http://stefanini:gamouse@10.1.140.76:8080';
function getAllGroups(){
  console.log('all groupds');
}

const BootFechaGrupos = {

  showProfile(req, res) {
    console.log('show profile');
    BootFechaGrupos.getAllGroups(res);
  },
  
  //* Pega todos os grupos da communidade Workplace do access_token
  // retorna lista de grupos [{id:123, privacity:'OPEN'}]
  getAllGroups: function(resp) {
    var GRAPH_URL_GROUPS= 'https://graph.facebook.com/community/groups';
    rp({
        url: GRAPH_URL_GROUPS,
        // proxy: proxyMaquina,
        headers: {
            Authorization: 'Bearer ' + access_token
        },
        json: true
        })
    .then(function (res) {
        BootFechaGrupos.validaAbertoSecreto(res.data, resp);
    })
    .catch(function (err) {
        resp.send(err.message);
    });
  },

  //* verifica o tipo de grupo “Aberto” ou “Secreto”.
  validaAbertoSecreto: function(grupos, resp) {
    const filtro = _.filter(grupos, (grupo) => {
        return grupo.privacy === 'OPEN' || grupo.privacy === 'SECRET' ;
    });

    var idNIgnorado = BootFechaGrupos.validateIgnore(filtro);

    if (idNIgnorado.length > 0){
      BootFechaGrupos.editagrupo(idNIgnorado, resp)
    }
  },

  //* 4 - Whitelist Verifica Lista de grupos que não podem ter o tipo alterado
// retorna ids que podem ser alterados: ['123',567]
validateIgnore: function(filtro){
  var result = [];

  for (var i = 0; i < filtro.length; i++) {
      if (
          filtro[i].id === '298458600636179' ||
          filtro[i].id === '365626860550839' ||
          filtro[i].id === '365626860550839' ||
          filtro[i].id === '152131118726078' ||
          filtro[i].id === '361158307670358' ||
          filtro[i].id === '614951982227871' ||
          filtro[i].id === '1389472191172393'
      ) {
          
      } else {
          result.push(filtro[i].id);
      }
  }

  return result;
},

  //* Faz requisicao e edita o grupo para fechado
  editagrupo: function(id, resp) {
    var id = 754959588048552;
    var url = 'https://graph.facebook.com/'+id+'?privacy=CLOSED';

    rp({
        url: url,
        method: 'POST',
       // proxy: proxyMaquina,
        headers: {
            Authorization: 'Bearer ' + access_token
        },
        json: true
        })
    .then(function (res) {
      BootFechaGrupos.enviaMensagemFeed(id, resp);
    })
    .catch(function (err) {
      resp.send(err.message);
    });
  },

  enviaMensagemFeed: function(id, resp) {
    var url = 'https://graph.facebook.com/'+id+'/feed';

    rp({
        url: url,
        method: 'POST',
       // proxy: proxyMaquina,
        headers: {
            Authorization: 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        },
        body: {
          "message" : `Ola! 
          A privacidade do seu grupo foi automaticamente alterada para “Fechado”.
          De acordo com as regras de uso do Workplace no Sebrae, a partir de agora só será permitida a criação de Grupos Fechados.`
        },
        json: true
        })
    .then(function (res) {
      console.log('success enviou msg no feed');
      resp.json({ 'id': id, 'msg': 'success enviou msg no feed' });
    })
    .catch(function (err) {
      resp.send(err.message);
    });

  }

};

module.exports = BootFechaGrupos;
