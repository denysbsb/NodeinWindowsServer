import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from "./login.guard";
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { ManterUsuarioComponent } from '../pages/manter-usuario/manter-usuario.component';
import { NotificacoesComponent } from '../pages/notificacoes/notificacoes.component';
import { BackupComponent } from '../pages/backup/backup.component';
import { LoginComponent } from '../pages/login/login.component';
import { EditarUsuarioComponent } from '../pages/manter-usuario/editar-usuario/editar-usuario.component';
import { AdicionarUsuarioComponent } from '../pages/manter-usuario/adicionar-usuario/adicionar-usuario.component';
import { ManterNotificacaoComponent } from '../pages/manter-notificacao/manter-notificacao.component';
import { AdicionarNotificacaoComponent } from '../pages/manter-notificacao/adicionar-notificacao/adicionar-notificacao.component';
import { EditarNotificacaoComponent } from '../pages/manter-notificacao/editar-notificacao/editar-notificacao.component';
import { ManterLinkComponent } from '../pages/manter-link/manter-link.component';
import { AdicionarLinkComponent } from '../pages/manter-link/adicionar-link/adicionar-link.component';
import { EditarLinkComponent } from '../pages/manter-link/editar-link/editar-link.component';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [LoginGuard] },
    { path: 'home', component: HomeComponent },
    {
        path: 'usuarios', canActivate: [LoginGuard],
        children: [
            { path: '', component: ManterUsuarioComponent },
            { path: 'add', component: AdicionarUsuarioComponent },
            { path: ':id', component: EditarUsuarioComponent },
        ]
    },
    {
        path: 'notificacoes', canActivate: [LoginGuard],
        children: [
            { path: '', component: ManterNotificacaoComponent },
            { path: 'add', component: AdicionarNotificacaoComponent },
            { path: ':id', component: EditarNotificacaoComponent },
        ]
    },
    {
        path: 'links', canActivate: [LoginGuard],
        children: [
            { path: '', component: ManterLinkComponent },
            { path: 'add', component: AdicionarLinkComponent },
            { path: ':id', component: EditarLinkComponent },
        ]
    },
    { path: 'backup', component: BackupComponent, canActivate: [LoginGuard] },
    { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes);