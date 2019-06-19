import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtService, ApiService } from '.';

describe('UserService', () => {
  let service: UserService;
  beforeEach(() => { TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, RouterTestingModule ],
    providers: [UserService, ApiService, JwtService]
  });
  service = TestBed.get(UserService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCurrentUser should not have a current user', () => {
    expect(service.getCurrentUser().id).toBeUndefined();
  });

  it('#populate should detect if JWT is in localstorage', () => {
    expect(service.populate()).toBeFalsy();
  });

});
