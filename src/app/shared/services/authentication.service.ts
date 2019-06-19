import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { User } from '..';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

// firebase auth response
interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private expiresAt = 0;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    isAuthenticated(): boolean {
      // Check whether the current time is past the
      // Access Token's expiry time
      var exp = this.getExpiration();
      if(exp && Date.now() > exp) {
        this.logout();
        return;
      }
      return Date.now() < this.getExpiration();
    }

    login(username: string, password: string) {
        console.log(` email: ${username} password: ${password}`);
        return this.http.post<any>(`${environment.api_url}/user/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem("expires_at", JSON.stringify(user.expiresIn + Date.now()) );
                    this.currentUserSubject.next(user);
                }

                return user;
            }), catchError(err => {return throwError(err);}));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem("expires_at");
        this.currentUserSubject.next(null);
        this.router.navigate(['login']);
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return expiresAt;
    }    
}