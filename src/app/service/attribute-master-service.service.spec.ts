import { TestBed } from '@angular/core/testing';

import { AttributeMasterServiceService } from './attribute-master-service.service';

describe('AttributeMasterServiceService', () => {
  let service: AttributeMasterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeMasterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
