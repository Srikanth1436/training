import { TestBed } from '@angular/core/testing';

import { ShirtsdataService } from './shirtsdata.service';

describe('ShirtsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShirtsdataService = TestBed.get(ShirtsdataService);
    expect(service).toBeTruthy();
  });
});
