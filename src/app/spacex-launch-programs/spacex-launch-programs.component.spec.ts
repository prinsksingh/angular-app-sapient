import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchProgramsComponent } from './spacex-launch-programs.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SpacexLaunchProgramsComponent', () => {
  let component: SpacexLaunchProgramsComponent;
  let fixture: ComponentFixture<SpacexLaunchProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexLaunchProgramsComponent ],
      imports: [HttpClientModule, MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
