import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuDirectDomainComponent } from './au-direct-domain.component';

describe('AuDirectDomainComponent', () => {
  let component: AuDirectDomainComponent;
  let fixture: ComponentFixture<AuDirectDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuDirectDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuDirectDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
