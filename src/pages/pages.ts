import { BackupComponent } from './backup/backup.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BackupDetalheDialogComponent } from './backup/backup-detalhe-dialog/backup-detalhe-dialog.component';
import { ConfirmacaoDialogComponent } from './modals/confirmacao-dialog/confirmacao-dialog.component';
import { HomeComponent } from './home/home.component';

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
export const Pages: any[] = [
    MenuComponent,
    BackupComponent,
    LoginComponent,
    HomeComponent,
    BackupDetalheDialogComponent, 
    ConfirmacaoDialogComponent,
];
