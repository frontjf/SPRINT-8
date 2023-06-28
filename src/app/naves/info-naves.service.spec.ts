import { TestBed } from '@angular/core/testing';

import { InfoNavesService } from './info-naves.service';

describe('InfoNavesService', () => {
  let service: InfoNavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoNavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
