import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyPlethoraComponent } from './case-study-plethora.component';

describe('CaseStudyPlethoraComponent', () => {
  let component: CaseStudyPlethoraComponent;
  let fixture: ComponentFixture<CaseStudyPlethoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyPlethoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyPlethoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
