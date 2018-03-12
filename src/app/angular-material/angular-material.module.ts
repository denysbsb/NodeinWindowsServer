import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatCardModule,
  MatSortModule,
  MatPaginatorIntl,
  MatTabsModule,
  MatTooltipModule,
  MatGridListModule,
  MatDividerModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,  
} from '@angular/material';

import { MatPaginatorIntlPtBr } from './MatPaginatorIntl_pt-br';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@NgModule({
  imports: [],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatTabsModule,
    MatTooltipModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtBr }]
})
export class AngularMaterialModule { }
