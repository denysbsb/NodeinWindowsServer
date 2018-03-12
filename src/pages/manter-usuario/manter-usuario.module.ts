import { Ng2BRPipesModule } from 'ng2-brpipes';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../app/angular-material/angular-material.module';

import { ManterUsuarioComponent } from './manter-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { AdicionarUsuarioComponent } from './adicionar-usuario/adicionar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
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
    ManterUsuarioComponent, 
    ListarUsuarioComponent, 
    AdicionarUsuarioComponent, 
    EditarUsuarioComponent
  ],
  providers:[
    ModalService
  ]
})
export class UsuarioModule { }
