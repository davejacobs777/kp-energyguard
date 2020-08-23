import { TestBed } from '@angular/core/testing';

import { FocusGroupsService } from './focus-groups.service';

describe('FocusGroupsService', () => {
  let service: FocusGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
