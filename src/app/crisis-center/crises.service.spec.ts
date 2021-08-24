import { TestBed } from '@angular/core/testing';

import { CrisesService } from './crises.service';

describe('HeroesService', () => {
  let service: CrisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
