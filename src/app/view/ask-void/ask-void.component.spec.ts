import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskVoidComponent } from './ask-void.component';

describe('AskVoidComponent', () => {
  let component: AskVoidComponent;
  let fixture: ComponentFixture<AskVoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskVoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskVoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
