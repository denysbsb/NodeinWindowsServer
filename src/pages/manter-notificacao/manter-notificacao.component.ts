import { Component, OnInit } from '@angular/core';

import { ListarNotificacaoDados, ListarNotificacaoAcoes, NotificacaoTipo, NotificacaoStatus } from './listar-notificacao/listar-notificacao.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Moment, isMoment } from 'moment';


@Component({
  selector: 'manter-notificacao',
  templateUrl: './manter-notificacao.component.html',
  styleUrls: ['./manter-notificacao.component.css']
})
export class ManterNotificacaoComponent implements OnInit {

  filtroPesquisa: FiltroPesquisa;
  tiposNotificacao: any[];
  statusNotificacao: any[];
  listaNotificacoes: ListarNotificacaoDados[] = [];

  constructor() { }

  ngOnInit() {
    this.filtroPesquisa = {}
    this.tiposNotificacao = this.getTipos();
    this.statusNotificacao = this.getStatus();
  }

  pesquisarNotificacao() {
    if (isMoment(this.filtroPesquisa.dataInicial)) {
      var moment = this.filtroPesquisa.dataInicial as Moment;
      this.filtroPesquisa.dataInicial = moment.toDate();
    }

    console.warn("TODO: Realizar consulta com filtro");
    this.listaNotificacoes = this.gerarAmostra();
  }

  getTipos() {
    let tipos = [];
    for (const key in NotificacaoTipo) {
      tipos.push({ key, value: NotificacaoTipo[key] });
    }
    return tipos;
  }

  getStatus() {
    let status = [];
    for (const key in NotificacaoStatus) {
      status.push({ key, value: NotificacaoStatus[key] });
    }
    return status;
  }

  gerarAmostra() {
    let hoje = new Date();
    var dados = [];
    const destinatariosValues = [["Maria", "João", "Fulano"], ["Maria", "João"], ["Fulano"]];
    const tipos = [NotificacaoTipo.chat, NotificacaoTipo.grupo, NotificacaoTipo.chat];
    const notificacoes = ["Lorem ipsum dolor sit amet.", "Lorem ipsum.", "Dolor sit amet."];
    const statusValues = [NotificacaoStatus.agendada, NotificacaoStatus.enviado, NotificacaoStatus.enviado];
    const acoes: ListarNotificacaoAcoes = { enviar: true, editar: true, visualizar: true, excluir: true };

    for (let i = 0; i < destinatariosValues.length; i++) {
      var info: ListarNotificacaoDados =
        {
          id: i,
          destinatarios: destinatariosValues[i],
          tipo: tipos[i],
          notificacao: notificacoes[i],
          status: statusValues[i],
          dataEnvio: gerarDia(),
          acoes: Object.assign({}, acoes),
        }
      if (info.status == NotificacaoStatus.enviado) {
        info.acoes.editar = info.acoes.enviar = info.acoes.excluir = false;
      }
      dados.push(info);
    }
    return dados;
  }
}
interface FiltroPesquisa {
  palavraChave?: string,
  dataInicial?: Date,
  tipo?: NotificacaoTipo,
  status?: NotificacaoStatus
}

function gerarDia() {
  var dia: Date = new Date();
  //Num. aleatório entre -50 e 50;
  var diasExtras = (Math.random() * 51) * (Math.round(Math.random()) == 1 ? 1 : -1);
  dia.setDate(dia.getDate() + diasExtras);
  return dia;
}