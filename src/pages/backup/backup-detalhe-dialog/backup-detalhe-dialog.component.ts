import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatTableDataSource
} from '@angular/material';
import { BackupDetalhe } from '../backup.component';

@Component({
  selector: 'backup-detalhe-dialog',
  templateUrl: './backup-detalhe-dialog.component.html',
  styleUrls: ['./backup-detalhe-dialog.component.css']
})
export class BackupDetalheDialogComponent {
  detalhesTitulos: any[] = ["tabela", "tempoExecucao", "mensagemErro"];
  detalhes: MatTableDataSource<BackupDetalhe> = new MatTableDataSource<BackupDetalhe>();

  constructor(
    public dialogRef: MatDialogRef<BackupDetalheDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.detalhes.data = this.data;
    console.log(this.detalhes.data);
  }


  fechar() {
    this.dialogRef.close();
  }
}
