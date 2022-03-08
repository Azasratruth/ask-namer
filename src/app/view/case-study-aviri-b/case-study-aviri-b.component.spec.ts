import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyAviriBComponent } from './case-study-aviri-b.component';

describe('CaseStudyAviriBComponent', () => {
  let component: CaseStudyAviriBComponent;
  let fixture: ComponentFixture<CaseStudyAviriBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyAviriBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyAviriBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
