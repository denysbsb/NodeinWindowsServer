import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLinkComponent } from './editar-link.component';

describe('EditarLinkComponent', () => {
  let component: EditarLinkComponent;
  let fixture: ComponentFixture<EditarLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
