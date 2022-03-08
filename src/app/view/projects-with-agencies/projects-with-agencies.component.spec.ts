import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsWithAgenciesComponent } from './projects-with-agencies.component';

describe('ProjectsWithAgenciesComponent', () => {
  let component: ProjectsWithAgenciesComponent;
  let fixture: ComponentFixture<ProjectsWithAgenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsWithAgenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsWithAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
