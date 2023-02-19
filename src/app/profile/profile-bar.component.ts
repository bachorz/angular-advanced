import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {User} from './models/user';
import {AuthService} from '../auth/auth.service';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'profile-bar',
  template: `
    <ng-container *ngIf="auth.isAuthenticated">
      Hello again, <strong>{{(profile | async).name }}</strong>!
      <span (click)="auth.logout()"> | Logout</span>
    </ng-container>
    <ng-container *ngIf="!auth.isAuthenticated">
      <span routerLink="/login"> Login </span>
      <span routerLink="/registration"> Register </span>
    </ng-container>
  `,
  styles: []
})
export class ProfileBarComponent implements OnInit {

  constructor(private profileService: ProfileService, protected auth: AuthService) { }

  profile: User;
//  profile = this.profileService.getUserProfile().pipe(tap(console.log()));

  ngOnInit() {
  }
}
