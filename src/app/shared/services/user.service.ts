import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable} from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { User } from '../models';
import { ApiService, JwtService } from './http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private jwtService: JwtService
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  // attemptAuth(credentials): Observable<User> {
  //   let myUser = new Observable<User>();
  //   let stuff = this.apiService.post('/users/login', {user: credentials})
  //   .subscribe((data: User) => {
  //     this.setAuth(data);
  //     myUser = data;
  //   });

  //   return stuff;
  // }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // // Update the user on the server (email, pass, etc)
  // update(user): Observable<User> {
  //   this.apiService
  //   .put('/user', { user })
  //   .subscribe(() => {
  //     // Update the currentUser observable
  //     complete: this.currentUserSubject.next(data);
  //     return data;
  //   });
  // }

}
