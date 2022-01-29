import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWhatsInABrandNameComponent } from './blog-whats-in-a-brand-name.component';

describe('BlogWhatsInABrandNameComponent', () => {
  let component: BlogWhatsInABrandNameComponent;
  let fixture: ComponentFixture<BlogWhatsInABrandNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogWhatsInABrandNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogWhatsInABrandNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
