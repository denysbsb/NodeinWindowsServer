import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatTableDataSource
} from '@angular/material';

@Component({
  selector: 'confirmacao-dialog',
  templateUrl: './confirmacao-dialog.component.html',
  styleUrls: ['./confirmacao-dialog.component.css']
})
export class ConfirmacaoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfigConfirmacaoDialog
  ) { 
  }
}

export interface ConfigConfirmacaoDialog {
  titulo: string,
  textoDeConfirmacao: string,
  textoBotaoConfirmar?: string,
  textoBotaoCancelar?: string,
  cancelarCallback?: () => any;
  confirmarCallback: () => any;
}