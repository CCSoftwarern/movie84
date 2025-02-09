import { TestBed } from '@angular/core/testing';

import { CelebridadesService } from './celebridades.service';

describe('CelebridadesService', () => {
  let service: CelebridadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelebridadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
