import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDiagnosticLandingComponent } from './name-diagnostic-landing.component';

describe('NameDiagnosticLandingComponent', () => {
  let component: NameDiagnosticLandingComponent;
  let fixture: ComponentFixture<NameDiagnosticLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameDiagnosticLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDiagnosticLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
