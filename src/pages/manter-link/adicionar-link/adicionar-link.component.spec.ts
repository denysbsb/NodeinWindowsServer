import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarLinkComponent } from './adicionar-link.component';

describe('AdicionarLinkComponent', () => {
  let component: AdicionarLinkComponent;
  let fixture: ComponentFixture<AdicionarLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
