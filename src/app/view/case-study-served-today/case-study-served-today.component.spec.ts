import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyServedTodayComponent } from './case-study-served-today.component';

describe('CaseStudyServedTodayComponent', () => {
  let component: CaseStudyServedTodayComponent;
  let fixture: ComponentFixture<CaseStudyServedTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyServedTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyServedTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
