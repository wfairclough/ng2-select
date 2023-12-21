import { TestBed } from '@angular/core/testing';

import { Ng2SelectService } from './ng2-select.service';

describe('Ng2SelectService', () => {
  let service: Ng2SelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2SelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
