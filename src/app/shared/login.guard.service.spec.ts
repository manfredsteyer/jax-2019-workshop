/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Login.guardService } from './login.guard.service';

describe('Service: Login.guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Login.guardService]
    });
  });

  it('should ...', inject([Login.guardService], (service: Login.guardService) => {
    expect(service).toBeTruthy();
  }));
});
