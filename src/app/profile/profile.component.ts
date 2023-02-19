import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from './models/user';

@Component({
  selector: 'profile',
  template: `
    <div *ngIf="profile">
      <h3>User Profile</h3>
      <dl class="row">
        <dt class="col-3">Name:</dt>
        <dd class="col-9">{{profile.name}}</dd>
        <dt class="col-3">Username:</dt>
        <dd class="col-9">{{profile.username}}</dd>
        <dt class="col-3">E-Mail:</dt>
        <dd class="col-9">{{profile.email}}</dd>
      </dl>
    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  profile: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserProfile()
      .subscribe(response => {
        this.profile = response;
      });
  }

}
