import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyNinetyDegreesNormalComponent } from './case-study-ninety-degrees-normal.component';

describe('CaseStudyNinetyDegreesNormalComponent', () => {
  let component: CaseStudyNinetyDegreesNormalComponent;
  let fixture: ComponentFixture<CaseStudyNinetyDegreesNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyNinetyDegreesNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyNinetyDegreesNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
