import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersLandingComponent } from './partners-landing.component';

describe('PartnersLandingComponent', () => {
  let component: PartnersLandingComponent;
  let fixture: ComponentFixture<PartnersLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
