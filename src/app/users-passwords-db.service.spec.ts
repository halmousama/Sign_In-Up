import { TestBed } from '@angular/core/testing';

import { UsersPasswordsDBService } from './users-passwords-db.service';

describe('UsersPasswordsDBService', () => {
  let service: UsersPasswordsDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersPasswordsDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
