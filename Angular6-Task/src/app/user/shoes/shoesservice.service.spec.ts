import { TestBed } from '@angular/core/testing';

import { ShoesserviceService } from './shoesservice.service';

describe('ShoesserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoesserviceService = TestBed.get(ShoesserviceService);
    expect(service).toBeTruthy();
  });
});
