import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
// import { of } from 'rxjs/observable/of';
// import { delay } from 'rxjs/operators';

@Injectable()
export class AuthorizedGuard implements CanActivate, CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childRoute, state)
  }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.auth.state;
  }

  constructor(private auth: AuthService) {

  }
}
