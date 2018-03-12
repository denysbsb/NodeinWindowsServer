import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNotificacaoComponent } from './listar-notificacao.component';

describe('ListarNotificacaoComponent', () => {
  let component: ListarNotificacaoComponent;
  let fixture: ComponentFixture<ListarNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
