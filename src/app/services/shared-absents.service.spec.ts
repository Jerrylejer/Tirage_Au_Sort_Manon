import { TestBed } from '@angular/core/testing';

import { SharedAbsentsService } from './shared-absents.service';

describe('SharedAbsentsService', () => {
  let service: SharedAbsentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedAbsentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
