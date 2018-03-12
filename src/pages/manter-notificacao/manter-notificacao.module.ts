import { Ng2BRPipesModule } from 'ng2-brpipes';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../app/angular-material/angular-material.module';

import { ManterNotificacaoComponent } from './manter-notificacao.component';
import { ListarNotificacaoComponent } from './listar-notificacao/listar-notificacao.component';
import { AdicionarNotificacaoComponent } from './adicionar-notificacao/adicionar-notificacao.component';
import { EditarNotificacaoComponent } from './editar-notificacao/editar-notificacao.component';
import { ModalService } from '../modals/modal.service';


@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    Ng2BRPipesModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ManterNotificacaoComponent, 
    ListarNotificacaoComponent, 
    AdicionarNotificacaoComponent, 
    EditarNotificacaoComponent
  ],
  providers:[
    ModalService
  ]
})
export class NotificacaoModule { }
