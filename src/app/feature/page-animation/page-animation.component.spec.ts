import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnimationComponent } from './page-animation.component';

describe('PageAnimationComponent', () => {
  let component: PageAnimationComponent;
  let fixture: ComponentFixture<PageAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
