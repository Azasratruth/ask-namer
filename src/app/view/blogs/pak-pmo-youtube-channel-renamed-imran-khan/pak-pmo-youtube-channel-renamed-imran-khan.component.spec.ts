import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakPmoYoutubeChannelRenamedImranKhanComponent } from './pak-pmo-youtube-channel-renamed-imran-khan.component';

describe('PakPmoYoutubeChannelRenamedImranKhanComponent', () => {
  let component: PakPmoYoutubeChannelRenamedImranKhanComponent;
  let fixture: ComponentFixture<PakPmoYoutubeChannelRenamedImranKhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakPmoYoutubeChannelRenamedImranKhanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakPmoYoutubeChannelRenamedImranKhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
