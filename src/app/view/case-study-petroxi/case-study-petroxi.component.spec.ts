import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyPetroxiComponent } from './case-study-petroxi.component';

describe('CaseStudyPetroxiComponent', () => {
  let component: CaseStudyPetroxiComponent;
  let fixture: ComponentFixture<CaseStudyPetroxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyPetroxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyPetroxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
