import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNamerCaseStudyLandingComponent } from './ask-namer-case-study-landing.component';

describe('AskNamerCaseStudyLandingComponent', () => {
  let component: AskNamerCaseStudyLandingComponent;
  let fixture: ComponentFixture<AskNamerCaseStudyLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskNamerCaseStudyLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNamerCaseStudyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
