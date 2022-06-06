import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const httpHeaders = req.headers.set(
      'Content-Type', 'application/x-www-form-urlencoded'
    );

    const clonedRequest = req.clone({
      headers: httpHeaders,
    });

    return next.handle(clonedRequest).pipe(
      tap(data => console.log('int ', data))
    );
  }
}
