import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonForBlogsComponent } from './back-button-for-blogs.component';

describe('BackButtonForBlogsComponent', () => {
  let component: BackButtonForBlogsComponent;
  let fixture: ComponentFixture<BackButtonForBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonForBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonForBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
