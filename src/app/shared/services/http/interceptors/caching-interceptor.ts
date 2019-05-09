import { RequestCacheService } from '../request-cache.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // continue if not cachable.
    //if (!isCachable(req)) { return next.handle(req); }
    const cachedResponse = this.cache.get(req);
    return cachedResponse ?
      of(cachedResponse) : this.sendRequest(req, next, this.cache);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCacheService): Observable<HttpEvent<any>> {
  
    // No headers allowed in npm search request
    const noHeaderReq = req.clone({ headers: new HttpHeaders() });
    console.log("sendRequest");
    console.log(req);
    return next.handle(noHeaderReq).pipe(
      tap(event => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          cache.put(req, event); // Update the cache.
        }
      })
    );
  }
}