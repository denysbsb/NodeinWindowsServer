import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterLinkComponent } from './manter-link.component';

describe('ManterLinkComponent', () => {
  let component: ManterLinkComponent;
  let fixture: ComponentFixture<ManterLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
