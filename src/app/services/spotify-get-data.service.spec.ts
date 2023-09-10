import { TestBed } from '@angular/core/testing';

import { SpotifyGetDataService } from './spotify-get-data.service';

describe('SpotifyGetDataService', () => {
  let service: SpotifyGetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyGetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
