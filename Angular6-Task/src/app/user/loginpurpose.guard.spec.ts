import { TestBed, async, inject } from '@angular/core/testing';

import { LoginpurposeGuard } from './loginpurpose.guard';

describe('LoginpurposeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginpurposeGuard]
    });
  });

  it('should ...', inject([LoginpurposeGuard], (guard: LoginpurposeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
