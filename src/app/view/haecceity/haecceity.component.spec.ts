import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaecceityComponent } from './haecceity.component';

describe('HaecceityComponent', () => {
  let component: HaecceityComponent;
  let fixture: ComponentFixture<HaecceityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaecceityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaecceityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
