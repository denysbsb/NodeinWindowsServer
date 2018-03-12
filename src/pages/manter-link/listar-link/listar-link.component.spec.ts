import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLinkComponent } from './listar-link.component';

describe('ListarLinkComponent', () => {
  let component: ListarLinkComponent;
  let fixture: ComponentFixture<ListarLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
