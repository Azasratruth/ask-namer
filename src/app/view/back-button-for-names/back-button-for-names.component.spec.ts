import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonForNamesComponent } from './back-button-for-names.component';

describe('BackButtonForNamesComponent', () => {
  let component: BackButtonForNamesComponent;
  let fixture: ComponentFixture<BackButtonForNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonForNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonForNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
