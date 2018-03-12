export const APP_ROUTE = {
    '_defaults': {
      'host': 'http://api.example.com/'
    },
    'user': {
      'url': 'users/{id}',
      'method': 'GET',
      'headers': {
        'content-type': 'application/json'
      },
      'params': {
        'id': {
          'type': 'number',
          'required': true
        }
      }
    },
    'testepost': {
      'url': 'http://localhost:8080/testepost',
      'method': 'POST',
      'headers': {
        'content-type': 'application/x-www-form-urlencoded'
      }
    },
    // 'testepost': {
    //  // 'url': 'https://homolog.sgi.sebrae.com.br/OAuth_Authorization/OAuth/Token',
  
    //   'url': 'http://localhost:8080/testepost',
    //   'method': 'POST',
    // },
    'url-auth': {
      'url': 'https://homolog.sgi.sebrae.com.br/OAuth_Authorization/OAuth/Token',
      'method': 'POST',
    },
  
    'github': {
      'url': 'https://api.github.com/users/seeschweiler',
      'method': 'GET',
    },
    'resolver': {
      'url': 'http://localhost:8080/resolver',
      'method': 'POST',
    }
  };

  export const APP_CONFIG = {
    'my-config': 'My Config',
    'my-config-env': {
      'dev': 'Config Dev',
      'prod': 'Config Dev'
    }
  };