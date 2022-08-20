import { TestBed } from '@angular/core/testing';

import { MarvelDataServiceService } from './marvel-data-service.service';

describe('MarvelDataServiceService', () => {
  let service: MarvelDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
