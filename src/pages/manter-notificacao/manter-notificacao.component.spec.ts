import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterNotificacaoComponent } from './manter-notificacao.component';

describe('ManterNotificacaoComponent', () => {
  let component: ManterNotificacaoComponent;
  let fixture: ComponentFixture<ManterNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
