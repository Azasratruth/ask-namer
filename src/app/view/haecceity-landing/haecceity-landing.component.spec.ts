import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaecceityLandingComponent } from './haecceity-landing.component';

describe('HaecceityLandingComponent', () => {
  let component: HaecceityLandingComponent;
  let fixture: ComponentFixture<HaecceityLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaecceityLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaecceityLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
