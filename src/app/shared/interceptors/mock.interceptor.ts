import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import customers from './customers.json';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('http://fakeapi.com/customers')) {
      return of(new HttpResponse({ status: 200, body: customers }));
    } else return next.handle(request);
  }
}
