import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) matMenuTriggerFor: MatMenuTrigger;
  title = 'facebook';

  foods = [
    { value: 'sebraeHomolog', viewValue: 'Sebrae Homolog' },
    { value: 'empretex', viewValue: 'Empretec' }
  ];
  selected2: any;
  constructor() {
    this.selected2 = 'sebraeHomolog';
  }
}
