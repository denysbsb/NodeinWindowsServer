import { Component, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ModalService } from '../../modals/modal.service';

@Component({
  selector: 'listar-notificacao',
  templateUrl: './listar-notificacao.component.html',
  styleUrls: ['./listar-notificacao.component.css']
})
export class ListarNotificacaoComponent {
  titulos = ['destinatarios', 'tipo', 'notificacao', 'status', 'dataEnvio', 'acoes'];
  dados: MatTableDataSource<ListarNotificacaoDados> = new MatTableDataSource();

  @Input('dados') amostra: ListarNotificacaoDados[];
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

  excluirNotificacao(id) {
    this.modals.abrirConfirmacao({
      titulo: "Confirmação",
      textoDeConfirmacao: "Tem certeza que deseja excluir esta notificação?",
      textoBotaoConfirmar: "Excluir",
      confirmarCallback: () => {
        console.warn(`TODO:Exluir Notificação nº:${id}`);
      }
    })
  }
  enviarNotificacao(id) {
    this.modals.abrirConfirmacao({
      titulo: "Envio",
      textoDeConfirmacao: "Tem certeza que deseja enviar esta notificação?",
      textoBotaoConfirmar: "Enviar",
      confirmarCallback: () => {
        console.warn(`TODO:Enviar Notificação nº:${id}`);
      }
    })
  }
}


// Amostra
export interface ListarNotificacaoDados {
  id: number;
  destinatarios: string[];
  tipo: NotificacaoTipo;
  notificacao: string;
  status: NotificacaoStatus;
  dataEnvio: Date;
  acoes: ListarNotificacaoAcoes;
}
export enum NotificacaoTipo {
  chat = "Chat",
  grupo = "Grupo"
}
export enum NotificacaoStatus {
  enviado = "Enviado",
  agendada = "Agendada"
}
export interface ListarNotificacaoAcoes {
  enviar: boolean;
  editar: boolean;
  visualizar: boolean;
  excluir: boolean;
}
