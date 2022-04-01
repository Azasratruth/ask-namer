import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICantAffordANamingAgencyAndWantANameQuicklyComponent } from './i-cant-afford-a-naming-agency-and-want-a-name-quickly.component';

describe('ICantAffordANamingAgencyAndWantANameQuicklyComponent', () => {
  let component: ICantAffordANamingAgencyAndWantANameQuicklyComponent;
  let fixture: ComponentFixture<ICantAffordANamingAgencyAndWantANameQuicklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICantAffordANamingAgencyAndWantANameQuicklyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ICantAffordANamingAgencyAndWantANameQuicklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
