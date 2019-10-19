import { TestBed } from '@angular/core/testing';

import { JeansdataService } from './jeansdata.service';

describe('JeansdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JeansdataService = TestBed.get(JeansdataService);
    expect(service).toBeTruthy();
  });
});
