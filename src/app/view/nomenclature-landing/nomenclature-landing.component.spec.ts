import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomenclatureLandingComponent } from './nomenclature-landing.component';

describe('NomenclatureLandingComponent', () => {
  let component: NomenclatureLandingComponent;
  let fixture: ComponentFixture<NomenclatureLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomenclatureLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomenclatureLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
