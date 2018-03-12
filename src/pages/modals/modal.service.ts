import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfigConfirmacaoDialog, ConfirmacaoDialogComponent } from './confirmacao-dialog/confirmacao-dialog.component';

@Injectable()
export class ModalService {
    constructor(private dialog: MatDialog) {
    }

    abrirConfirmacao(config: ConfigConfirmacaoDialog) {
        const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
            data: config
        })
        dialogRef.afterClosed().subscribe(confirmacao => {
            if (confirmacao) {
                if (config.confirmarCallback) config.confirmarCallback();
            } else {
                if (config.cancelarCallback) config.cancelarCallback();
            }
        });
    }
}