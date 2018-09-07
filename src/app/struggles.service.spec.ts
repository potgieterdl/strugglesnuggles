import { TestBed, inject } from '@angular/core/testing';

import { StrugglesService } from './struggles.service';

describe('StrugglesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StrugglesService]
    });
  });

  it('should be created', inject([StrugglesService], (service: StrugglesService) => {
    expect(service).toBeTruthy();
  }));
});
