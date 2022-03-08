import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyDuftUndDuComponent } from './case-study-duft-und-du.component';

describe('CaseStudyDuftUndDuComponent', () => {
  let component: CaseStudyDuftUndDuComponent;
  let fixture: ComponentFixture<CaseStudyDuftUndDuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyDuftUndDuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyDuftUndDuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
