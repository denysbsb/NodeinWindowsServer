import { Injectable } from '@angular/core';
import { Http } from '@stefanini/http';

@Injectable()

export class GruposService {

  constructor(public http: Http) {}

   getGroups(){
        this.http.get('github').subscribe(data => {
            console.log(data.json());
        });
    }

    setGroups() {
        let options = {
            body: {
                id:1,
                nome: 'denys'
            }
        };

        this.http.post('resolver',{data: '123'},options).subscribe(data => {
            console.log(data.json());
        });
    }

}