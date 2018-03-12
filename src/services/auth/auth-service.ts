import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()

export class AuthService {
  constructor(public http: HttpClient){}

  getToken(code): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': 'Bearer ',
      })
    };

    return new Promise((resolve, reject) => {
      let url = 'http://api.workplace.sebrae.com.br:81/auth?code='+code;
      this.http.get(url, httpOptions).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  getMe(token): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': 'Bearer '+ token,
      })
    };

    return new Promise((resolve, reject) => {
      this.http.get('https://homolog.sgi.sebrae.com.br/OAuth_API/api/Me', httpOptions).subscribe(data => {
        console.log('DATAs==', data);
      localStorage.setItem('usuario', JSON.stringify(data)); 
      console.log('DATAs==', data);
      });
    });
  }

}