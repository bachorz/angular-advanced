import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(this.getAuthorizedRequest(req)).pipe(
      catchError((err, caught) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.auth.logout('Authorization required - Please log in!!');
          return empty();
        }
        return Observable.throw(err);
      })
    );
  //  return null;
  }

  getAuthorizedRequest(req: HttpRequest<any>) {
    return req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    });
  }


  constructor(private auth: AuthService) { }

}
