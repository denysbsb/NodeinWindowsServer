import { Injectable } from '@angular/core';
// import { Http } from '@stefanini/http';

@Injectable()

export class AuthService {
  private _headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) {}


    getServico(code): Promise<any>{
      const httpOptions = {
          headers: new HttpHeaders({
             'Content-Type': 'application/json' 
          })
      };
      return new Promise((resolve, reject)=>{
       this.http.get('http://localhost:3001/testeget').subscribe(data => {
         console.log('data', data);
       });
      });

      // console.log('typeof===', typeof(code));
      // let url = 'https://homolog.sgi.sebrae.com.br/OAuth_Authorization/OAuth/Token';

      // //let url = 'http://localhost:8080/testepost';

      // const body = new HttpParams()
      // .set(`redirect_uri`, 'http://localhost:4200/home')
      // .set(`grant_type`, 'authorization_code')
      // .set(`code`, code)
      // .set(`client_id`, '65')
      // .set(`client_secret`, 'vQwAtkQmMl7F-RhsWhRf');

      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Content-Type':  'application/x-www-form-urlencoded',
      //     'Authorization': 'Basic MTExOkVUMXhBWlh3Z0pSb1dmMVB6cjlp',
      //     'accept': '*/*',
      //     'client_id': '65',
      //     'client_secret': 'vQwAtkQmMl7F-RhsWhRf'
      //   })
      // };

      // return new Promise((resolve, reject)=>{
      //   this.http.post<any>(url, body.toString(), httpOptions).subscribe(data=>{
      //     console.log('SALE POST-', data);
      //   });
      // });
    }
    
    urlEncode(params) {
      return Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }

    // private montarBodyRequest(objeto?: any) {
    //   objeto = Object.assign({
    //     redirect_uri: 'http://localhost:4200/home',
    //     grant_type: 'authorization_code',
    //     client_id: 65,
    //     client_secret: 'vQwAtkQmMl7F-RhsWhRf'
    //   }, objeto);

    //   let search = new URLSearchParams('');
    //   for (let param in objeto) {
    //       if (typeof objeto[param] === 'object') {
    //           search.set(param, JSON.stringify(objeto[param]));
    //       } else {
    //           search.set(param, objeto[param]);
    //       }
    //   }

    //   return search.toString();
    // }

    getTokenData(code): Promise<any> {
      // const body = new HttpParams()
      //     .set('username', 'denys')
      //     .set('password', 'fernando');
     
      // const headers = this._headers.append('foo', 'Bar');


      // return new Promise((resolve, reject) => {
      //   this.http.post('http://localhost:8080/testepost', { body: body, headers : headers } ).subscribe(data => {

      //   });
      // });

      let body = new URLSearchParams();
      body.set('user',  'denys');
      body.set('password',  'denys');

      let options = {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      };

      return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/testepost',body.toString(), options).subscribe(response => {
              //...
          });
      });

  
        
      
      //   return this.http.post('/login',
      //     body.toString(),
      //     {
      //       headers: new HttpHeaders()
      //         .set('Content-Type', 'application/x-www-form-urlencoded')
      //     }
      //   );
      // }
    //   console.log('TOKENNNN DATASS');
    //   let headers = new Headers({
    //     'Authorization': 'Basic MTExOkVUMXhBWlh3Z0pSb1dmMVB6cjlp',
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     'Accept': 'application/json',
    //     'client_id':'65',
    //     'client_secret':'vQwAtkQmMl7F-RhsWhRf'
    // });
    
    // let options = new RequestOptions({ headers: headers });

    // // let objeto = {
    // //   'redirect_uri': 'http://localhost:4200/home',
    // //   'grant_type': 'authorization_code',
    // //   'code': code,
    // //   'client_id': '65',
    // //   'client_secret': 'vQwAtkQmMl7F-RhsWhRf'
    // // };

    // let objeto = {
    //   code: code
    // }

    // let body = this.montarBodyRequest(objeto);


    //  return new Promise((resolve, reject) => {
      
    //      this.http.post('http://localhost:8080/testepost', body, options).subscribe(data => {
    //        console.log('data--', data);
    //        resolve();
    // //         try {
    // //             let dado: any = data.json().result;
    // //             if (!dado || !dado.result) {
    // //                 reject('empty');
    // //             }

    // //             resolve(dado.result);
    // //         } catch (error) {
    // //             reject(error);
    // //         }
    // //     }, err => {
    // //         console.log('Erro = ', err);
    // //         reject(err);
    // });
    // });
      //  let request = {
      //     username: 'name',
      //     password: 'pass'
      //   };

      //   let headers = {
      //       'authorization': 'Basic MTExOkVUMXhBWlh3Z0pSb1dmMVB6cjlp',
      //       'client_id':'65',
      //       'client_secret':'vQwAtkQmMl7F-RhsWhRf'
      //   };

      //   let observable = this.http.request('testepost', null, { body: this.urlEncode(request)});
      //   return new Promise((resolve, reject) => {
      //     observable.subscribe(res => {
      //       resolve(res);
      //     }, error => {
      //       reject(error);
      //     });
      //   });

        // return this.http.request('autenticacao', null, {body: Format.urlEncode(request)});
    
      //   console.log('TESTE');
      //   //let url = 'https://homolog.sgi.sebrae.com.br/OAuth_Authorization/OAuth/Token';
      //   let url = 'http://localhost:8080/testepost';


      //   let body = {
      //     redirect_uri: 'http://localhost:4200/home',
      //     grant_type: 'authorization_code',
      //     code: code,
      //     client_id: '65',
      //     client_secret: 'vQwAtkQmMl7F-RhsWhRf'
      //   };

      //   new FormData
      //   let headers = {
      //       'authorization': 'Basic MTExOkVUMXhBWlh3Z0pSb1dmMVB6cjlp',
      //       'client_id':'65',
      //       'client_secret':'vQwAtkQmMl7F-RhsWhRf'
      //   };

      // let observable = this.http.request('testepost', null, { body, headers });
  
      // return new Promise((resolve, reject) => {
      //   observable.subscribe(res => {
      //     resolve(res);
      //   }, error => {
      //     reject(error);
      //   });
      // });
    // }

        // let options = {

        //     body: {
        //       'redirect_uri': 'http://localhost:4200/home',
        //       'grant_type': 'authorization_code',
        //       'code': code,
        //       'client_id': '65',
        //       'client_secret': 'vQwAtkQmMl7F-RhsWhRf'
        //     }
        //   };

        //   var body = 'redirect_uri=http://localhost:4200/home&grant_type=authorization_code&code='+code+'client_id=65&client_secret=vQwAtkQmMl7F-RhsWhRf';
          
        //   let observable = this.http.post(url, body ,options);
          
        //   return new Promise((resolve, reject) => {
        //     observable.subscribe((response: any) => {
        //       resolve(response);
        //     }, (err: any) => {
        //       reject(err);
        //     });
        //   });
    }

}