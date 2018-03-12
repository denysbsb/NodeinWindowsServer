import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [AuthService]
})
export class HomeComponent {
    sub;
     constructor(private route: ActivatedRoute, 
         private authService: AuthService
    ) {
    //     this.gruposService.setGroups();
     }
     ngOnInit() {

         var code = this.route.snapshot.queryParams["code"];
         alert(code);

         this.authService.getToken(code).then((data)=>{
           this.authService.getMe(data.access_token).then(res=>{
           });
         }); 

        
     }
}