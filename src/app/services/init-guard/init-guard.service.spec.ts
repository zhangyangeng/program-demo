import { TestBed } from '@angular/core/testing';

import { InitGuardService } from './init-guard.service';

describe('InitGuardService', () => {
  let service: InitGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
