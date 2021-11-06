import { TestBed } from '@angular/core/testing';

import { PlayerGuardGuard } from './player-guard.guard';

describe('PlayerGuardGuard', () => {
  let guard: PlayerGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlayerGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
