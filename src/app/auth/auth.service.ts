import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {User} from '../profile/models/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {map, tap} from 'rxjs/operators';

interface Credentials {
  username: string;
  password: string;
}

interface Session {
  token: string;
  user: User;
  message?: string;
}

@Injectable()
export class AuthService {

  url = 'http://localhost:3000/login';
  private session = new BehaviorSubject<Session>(null);
  isAuthenticated = false;

  state = this.session.pipe(
    map ( session => session && !!session.token),
    tap( state => this.isAuthenticated = state)
  );

  logout(message?: string) {
    this.session.next({
      ...this.session.getValue(),
      token: null,
      message
    });
  }

  getToken() {
    const currentSession = this.session.getValue();
    return currentSession && currentSession.token;
  }

  getCurrentUser() {
    const currentSession = this.session.getValue();
    return currentSession && currentSession.user;
  }

  getMessage() {
    const currentSession = this.session.getValue();
    return currentSession && currentSession.message;
  }

  login(credentials: Credentials) {
    this.http.post(this.url, credentials)
      .subscribe((response: Session) => {
        this.session.next(response);
        // setTimeout(() => {
        //   this.session.next({
        //     ...this.session.getValue(), token: 'OLD_INVALID_TOKEN'
        //   });
        // }, 5000);
      }, error => {
        if (error instanceof HttpErrorResponse) {
          console.error(error.error);
        }
      });
  }

  constructor(private http: HttpClient) { }

}
