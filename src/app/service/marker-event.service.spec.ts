import { TestBed } from '@angular/core/testing';

import { MarkerEventService } from './marker-event.service';

describe('MarkerEventService', () => {
  let service: MarkerEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
