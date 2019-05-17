import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable()
export class HttpIntercept implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse) {
                console.log("Server side error")
                return throwError(error.message);
            } else {
                console.log("Client side error")
                return throwError(error)
            }
        })
    )
  }
}