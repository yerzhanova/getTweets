import { TestBed, inject } from '@angular/core/testing';

import { GetTweetsService } from './get-tweets.service';

describe('GetTweetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTweetsService]
    });
  });

  it('should be created', inject([GetTweetsService], (service: GetTweetsService) => {
    expect(service).toBeTruthy();
  }));
});
