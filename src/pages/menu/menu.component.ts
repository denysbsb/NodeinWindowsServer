import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'menu-topo',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    contaSelecionada: any
    contas = [
        { value: 'sebraeHomolog', viewValue: 'Sebrae Homolog' },
        { value: 'empretex', viewValue: 'Empretec' }
    ];

    routeLinks: any[];
    activeLinkIndex = -1;

    constructor(private router: Router) {
        this.contaSelecionada = this.contas[0];

        this.routeLinks = [
            {
                label: 'Usuarios',
                link: './usuarios',
                index: 0
            }, {
                label: 'Notificações',
                link: './notificacoes',
                index: 1
            }, {
                label: 'Links',
                link: './links',
                index: 2
            }, {
                label: 'Backup',
                link: './backup',
                index: 3
            },
        ];
    }

    ngOnInit(): void {
        var self = this;
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this.activeLinkIndex = this.routeLinks.findIndex(
                    route => {
                        let link = route.link.replace('.', '');
                        return self.router.url.indexOf(link) > -1;
                    }
                );
            }
        });
    }

    logout() {
        localStorage.setItem('access', 'false');
        localStorage.clear();
        this.router.navigate(["/login"]);
    }
}
