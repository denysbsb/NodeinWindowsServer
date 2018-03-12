import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarNotificacaoComponent } from './adicionar-notificacao.component';

describe('AdicionarNotificacaoComponent', () => {
  let component: AdicionarNotificacaoComponent;
  let fixture: ComponentFixture<AdicionarNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
