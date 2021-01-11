import { TestBed } from '@angular/core/testing';

import { SpacexLaunchProgramService } from './spacex-launch-program.service';
import { HttpClientModule } from '@angular/common/http';

describe('SpacexLaunchProgramService', () => {
  let service: SpacexLaunchProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule]
    });
    service = TestBed.inject(SpacexLaunchProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

