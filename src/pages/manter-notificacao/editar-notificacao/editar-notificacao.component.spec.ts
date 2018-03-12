import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNotificacaoComponent } from './editar-notificacao.component';

describe('EditarNotificacaoComponent', () => {
  let component: EditarNotificacaoComponent;
  let fixture: ComponentFixture<EditarNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
