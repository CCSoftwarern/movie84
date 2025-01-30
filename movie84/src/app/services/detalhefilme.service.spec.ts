import { TestBed } from '@angular/core/testing';

import { DetalhefilmeService } from './detalhefilme.service';

describe('DetalhefilmeService', () => {
  let service: DetalhefilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhefilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
