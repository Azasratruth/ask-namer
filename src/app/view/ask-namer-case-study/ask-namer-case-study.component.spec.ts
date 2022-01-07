import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskNamerCaseStudyComponent } from './ask-namer-case-study.component';

describe('AskNamerCaseStudyComponent', () => {
  let component: AskNamerCaseStudyComponent;
  let fixture: ComponentFixture<AskNamerCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskNamerCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskNamerCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
