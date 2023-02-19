import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import {Subject} from 'rxjs/Subject';
import {filter, map, multicast, refCount, share, shareReplay} from 'rxjs/operators';
import {ConnectableObservable} from 'rxjs/observable/ConnectableObservable';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class ProfileService {

  api_url = 'http://localhost:3000/users/';
  private user_request: Observable<User>;

  getUserProfile() {
    if (!this.user_request) {
      this.user_request = this.auth.state.pipe(
        filter(() => this.auth.isAuthenticated),
        map(() => this.auth.getCurrentUser()),
        // shareReplay()
      );
    }
    return this.user_request;
  }

  clearCache() {
    this.user_request = null;
  }

  constructor(private http: HttpClient, private auth: AuthService) {
  }
}
