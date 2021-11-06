import { TestBed } from '@angular/core/testing';

import { RpsserviceService } from './rpsservice.service';

describe('RpsserviceService', () => {
  let service: RpsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
