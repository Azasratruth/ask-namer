import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEvaluationsComponent } from './name-evaluations.component';

describe('NameEvaluationsComponent', () => {
  let component: NameEvaluationsComponent;
  let fixture: ComponentFixture<NameEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
