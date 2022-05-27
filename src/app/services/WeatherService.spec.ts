import { TestBed } from '@angular/core/testing';

import { WeatherService } from './WeatherService';

describe('WeatherservicesService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
