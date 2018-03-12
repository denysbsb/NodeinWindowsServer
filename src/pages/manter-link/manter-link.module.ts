import { Ng2BRPipesModule } from 'ng2-brpipes';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../app/angular-material/angular-material.module';

import { ManterLinkComponent } from './manter-link.component';
import { ListarLinkComponent } from './listar-link/listar-link.component';
import { AdicionarLinkComponent } from './adicionar-link/adicionar-link.component';
import { EditarLinkComponent } from './editar-link/editar-link.component';
import { ModalService } from '../modals/modal.service';


@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ManterLinkComponent, 
    ListarLinkComponent, 
    AdicionarLinkComponent, 
    EditarLinkComponent
  ],
  providers:[
    ModalService
  ]
})
export class LinkModule { }
