import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User, Role } from '../../../models';
import { UserData } from '../../../helpers/mock-data/user-data';

@Injectable({
    providedIn: 'root'
  })
export class MockBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const users: User[] = UserData;
        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        const roleString = isLoggedIn && authHeader.split('.')[1];
        const role = roleString ? Role[roleString] : null;
        console.log(` users: ${JSON.stringify(users)} authHeader: ${authHeader} role: ${role}`);
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate - public
            if (request.url.endsWith('/user/authenticate') && request.method === 'POST') {
                const user = users.find(x => x.username === request.body.username && x.password === request.body.password);
                if (!user) return unauthorized('Username or password is incorrect');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    token: `fake-jwt-token.${user.role}`,
                    expiresIn: user.expiresIn,
                    email: user.email,
                    settings: user.settings
                });
            }

            // get user by id - admin or user (user can only access their own record)
            if (request.url.match(/\/user\/\d+$/) && request.method === 'GET') {
                if (!isLoggedIn) return forbidden();

                // get id from request url
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);

                // only allow normal users access to their own record
                const currentUser = users.find(x => x.role === role);
                if (id !== currentUser.id && role !== Role.Admin) return forbidden();

                const user = users.find(x => x.id === id);
                return ok(user);
            }

            // get all users (admin only)
            if (request.url.endsWith('/users') && request.method === 'GET') {
                if (role !== Role.Admin) return forbidden();
                return ok(users);
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))
        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());

        // private helper functions

        function ok(body) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function forbidden() {
            return throwError({ status: 403, error: { message: 'Forbidden' } });
        }

        function unauthorized(message) {
            return throwError({ status: 401, error: { message } });
        }

        function error(message) {
            return throwError({ status: 400, error: { message } });
        }
    }
}

export let mockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: MockBackendInterceptor,
    multi: true
};