import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsAboutSoundSymbolismComponent } from './facts-about-sound-symbolism.component';

describe('FactsAboutSoundSymbolismComponent', () => {
  let component: FactsAboutSoundSymbolismComponent;
  let fixture: ComponentFixture<FactsAboutSoundSymbolismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactsAboutSoundSymbolismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsAboutSoundSymbolismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
