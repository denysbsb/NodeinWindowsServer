import { Component, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ModalService } from '../../modals/modal.service';
@Component({
  selector: 'listar-link',
  templateUrl: './listar-link.component.html',
  styleUrls: ['./listar-link.component.css']
})
export class ListarLinkComponent {

  titulos = ['nome', 'url', 'acoes'];
  dados: MatTableDataSource<ListarLinkDados> = new MatTableDataSource();

  @Input('dados') amostra: ListarLinkDados[];
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

  excluirLink(id) {
    this.modals.abrirConfirmacao({
      titulo: "Confirmação",
      textoDeConfirmacao: "Tem certeza que deseja excluir este link?",
      textoBotaoConfirmar: "Excluir",
      confirmarCallback: () => {
        console.warn(`TODO:Exluir Link nº:${id}`);
      }
    })
  }
}
// Amostra
export interface ListarLinkDados {
  id: number;
  nome: string;
  url: string;
  acoes: ListarLinkAcoes;
}

export interface ListarLinkAcoes {
  editar: boolean;
  excluir: boolean;
}
