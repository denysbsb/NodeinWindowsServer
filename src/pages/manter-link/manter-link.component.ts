import { Component, OnInit } from '@angular/core';
import { ListarLinkDados, ListarLinkAcoes } from './listar-link/listar-link.component';

@Component({
  selector: 'app-manter-link',
  templateUrl: './manter-link.component.html',
  styleUrls: ['./manter-link.component.css']
})
export class ManterLinkComponent implements OnInit {
  listaLinks: ListarLinkDados[] = [];
  nomePesquisa: string;

  constructor() { }

  ngOnInit() {
  }
  pesquisarLink() {
    console.warn("TODO: Realizar consulta com filtro");
    this.listaLinks = this.gerarAmostra();
  }

  gerarAmostra() {
    let acoes: ListarLinkAcoes = { editar: true, excluir: true };
    let linksAmostra: ListarLinkDados[] = [
      { id: 1, nome: "Sebrae", url: "www.sebrae.com", acoes },
      { id: 2, nome: "Sebrae Workplace", url: "www.sebraehomolog.facebook.com", acoes },
    ]
    return linksAmostra;
  }

}
