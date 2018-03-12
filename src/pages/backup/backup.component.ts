import { Component, ViewChild } from '@angular/core';
import {
    MatTableDataSource,
    MatPaginator,
    MatSort,
    MatDialog
} from '@angular/material';

import { BackupDetalheDialogComponent } from "./backup-detalhe-dialog/backup-detalhe-dialog.component"


@Component({
    selector: 'backup',
    templateUrl: './backup.component.html',
    styleUrls: ['./backup.component.css'],

})

export class BackupComponent {
    titulos = ['data', 'autor', 'status', 'acoes'];
    dados = new MatTableDataSource<Dados>(this.gerarAmostra(100));
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialog: MatDialog) { }

    ngAfterViewInit() {
        this.dados.sort = this.sort;
        this.dados.paginator = this.paginator;
    }

    gerarAmostra(quantidade: number) {
        var dados = [];
        for (let i = 0; i < quantidade; i++) {
            let acoes: Acoes = { detalhar: true };
            let detalhes: BackupDetalhe[] = [
                { tabela: "Albuns", tempoExecucao: 1, mensagemErro: "" },
                { tabela: "Applications", tempoExecucao: 5, mensagemErro: "Erro de conexão de banco de dados" },
                { tabela: "Comments", tempoExecucao: 6, mensagemErro: "" },
                { tabela: "Docs", tempoExecucao: 7, mensagemErro: "" },
                { tabela: "Events", tempoExecucao: 10, mensagemErro: "" },
            ]
            let info: Dados = {
                id: i,
                data: gerarDia(),
                autor: gerarAutor(),
                status: gerarStatus(),
                acoes,
                detalhes
            }
            dados.push(info);
        }
        return dados;
    }

    abrirDetalhes(id): void {
        let detalhes = this.dados.data.filter(dado => dado.id == id)[0].detalhes;
        console.log(detalhes);
        this.dialog.open(BackupDetalheDialogComponent, {
            data: detalhes
        })
    }
}

// Amostra
export interface BackupDetalhe {
    tabela: string,
    tempoExecucao: number,
    mensagemErro: string,
}

interface Dados {
    id: number;
    data: Date;
    autor: string;
    status: Status;
    acoes: Acoes;
    detalhes: BackupDetalhe[];
}

interface Acoes {
    detalhar: boolean;
}

enum Status {
    Concluido = "Concluido",
    Erro = "Erro"
}

function gerarStatus() {
    return Math.round(Math.random()) == 1 ? Status.Concluido : Status.Erro;
}
function gerarAutor() {
    return Math.random() >= 0.3 ? "Automático (Sistema)" : "João";
}

function gerarDia() {
    var dia: Date = new Date();
    //Num. aleatório entre -50 e 50;
    var diasExtras = (Math.random() * 51) * (Math.round(Math.random()) == 1 ? 1 : -1);
    dia.setDate(dia.getDate() + diasExtras);
    return dia;
}
