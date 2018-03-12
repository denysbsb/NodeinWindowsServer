import { NgModule } from '@angular/core';
import { CommonModule, PathLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";

import { ConfigurationModule } from '@stefanini/configuration';
import { Ng2BRPipesModule } from 'ng2-brpipes';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { LoginGuard } from './login.guard';
import { Services } from "../services";

import { AngularMaterialModule } from './angular-material/angular-material.module';

// import url-resolver module
import { UrlResolverModule } from '@stefanini/url-resolver';
import { APP_ROUTE, APP_CONFIG } from './app.config';

// Import http module
import { HttpModule, DefaultPlugins } from '@stefanini/http';
import { Pages } from '../pages/pages';

import { UsuarioModule } from '../pages/manter-usuario/manter-usuario.module';
import { NotificacaoModule } from '../pages/manter-notificacao/manter-notificacao.module';
import { LinkModule } from '../pages/manter-link/manter-link.module';
import { BackupDetalheDialogComponent } from '../pages/backup/backup-detalhe-dialog/backup-detalhe-dialog.component';
import { ConfirmacaoDialogComponent } from '../pages/modals/confirmacao-dialog/confirmacao-dialog.component';
import { ModalService } from '../pages/modals/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    Pages
  ],
  imports: [
    RouterModule,
    routing,
    BrowserModule,
    CommonModule,
    Ng2BRPipesModule,
    AngularMaterialModule,
    FormsModule,
    UsuarioModule,
    NotificacaoModule,
    LinkModule,
    ConfigurationModule.initialize(APP_CONFIG, 'dev'),
    UrlResolverModule.initialize(APP_ROUTE),
    HttpModule.initialize(DefaultPlugins),
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule,
    BrowserAnimationsModule,
    Ng2BRPipesModule

  ],
  entryComponents: [BackupDetalheDialogComponent, ConfirmacaoDialogComponent],
  providers: [
    Services,
    ModalService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }