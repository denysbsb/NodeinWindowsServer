import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class LoginGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate() {

        let logado = localStorage.getItem('usuario'); 
        
        if (logado) {
            return true;
        } else {
            this.router.navigate(["/login"]);
            return false;
        }
            
    }
}