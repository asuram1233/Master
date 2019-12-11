import { TestBed } from '@angular/core/testing';

import { BatchDataService } from './batch-data.service';

describe('BatchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchDataService = TestBed.get(BatchDataService);
    expect(service).toBeTruthy();
  });
});
