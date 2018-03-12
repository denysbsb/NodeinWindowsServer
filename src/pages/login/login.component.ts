import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor (private router: Router) {
        var urlAtuh = 'https://homolog.sgi.sebrae.com.br/OAuth_Authorization/OAuth/Authorize?client_id=65&secret_key=vQwAtkQmMl7F-RhsWhRf&public_key=L8bim4IOM6fvJRbmG2oV&response_type=code&redirect_uri=http://localhost:4200/home';
        window.location.href=urlAtuh;
    }
}