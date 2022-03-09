import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDiagnosticComponent } from './name-diagnostic.component';

describe('NameDiagnosticComponent', () => {
  let component: NameDiagnosticComponent;
  let fixture: ComponentFixture<NameDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
