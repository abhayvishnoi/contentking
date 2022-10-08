import { TestBed } from '@angular/core/testing';

import { ManageResourcesService } from './manage-resources.service';

describe('ManageResourcesService', () => {
  let service: ManageResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
