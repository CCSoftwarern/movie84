import { TestBed } from '@angular/core/testing';

import { BuscafilmeService } from './buscafilme.service';

describe('BuscafilmeService', () => {
  let service: BuscafilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscafilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
