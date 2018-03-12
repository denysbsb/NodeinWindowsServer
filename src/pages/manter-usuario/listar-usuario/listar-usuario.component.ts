import { Component, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ModalService } from '../../modals/modal.service';

@Component({
  selector: 'listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})

export class ListarUsuarioComponent {
  titulos = ['nome', 'email', 'cpf', 'unidade', 'perfil', 'acoes'];
  dados: MatTableDataSource<ListarUsuarioDados> = new MatTableDataSource();

  @Input('dados') amostra: ListarUsuarioDados[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private modals: ModalService) { }

  ngAfterViewInit() {
    this.dados.data = this.amostra;
    this.dados.sort = this.sort;
    this.dados.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty("amostra")) {
      this.dados.data = this.amostra;
    }
  }
  
  excluirUsuario(id){
    this.modals.abrirConfirmacao({
      titulo: "Confirmação",
      textoDeConfirmacao: "Tem certeza que deseja excluir este usuário? ",
      textoBotaoConfirmar: "Excluir",
      confirmarCallback: () => {
        console.warn(`TODO:Exluir Usuário nº:${id}`);
      }
    })
  }
}

// Amostra
export interface ListarUsuarioDados {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  unidade: string;
  perfil: string;
  acoes: ListarUsuarioAcoes;
}

export interface ListarUsuarioAcoes {
  editar: boolean;
  visualizar: boolean;
  excluir: boolean;
}
