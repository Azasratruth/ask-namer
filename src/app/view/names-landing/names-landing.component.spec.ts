import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesLandingComponent } from './names-landing.component';

describe('NamesLandingComponent', () => {
  let component: NamesLandingComponent;
  let fixture: ComponentFixture<NamesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
