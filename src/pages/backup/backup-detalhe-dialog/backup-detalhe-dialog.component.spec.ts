import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupDetalheDialogComponent } from './backup-detalhe-dialog.component';

describe('BackupDetalheDialogComponentt', () => {
  let component: BackupDetalheDialogComponent;
  let fixture: ComponentFixture<BackupDetalheDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupDetalheDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupDetalheDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
