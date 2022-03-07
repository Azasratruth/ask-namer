import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyTemplateComponent } from './case-study-template.component';

describe('CaseStudyTemplateComponent', () => {
  let component: CaseStudyTemplateComponent;
  let fixture: ComponentFixture<CaseStudyTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
