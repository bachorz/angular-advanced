import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'navbar',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light mb-2">
  <div class="container">
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          <a class="nav-link" routerLink="/">
            Home
          </a>
        </li>
        <ng-container>
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" routerLink="/profile">
              Profile
            </a>
          </li>
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" routerLink="/todos">
              Todos
            </a>
          </li>
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" routerLink="/posts">
              Posts
            </a>
          </li>
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" routerLink="/albums">
              Albums
            </a>
          </li>
          <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" [routerLink]="[{ outlets: { popup: ['quick-todo']}}]">
              Quick todo
            </a>
          </li>
        </ng-container>
      </ul>
    </div>
    <div class="navbar-right">
      <span class="navbar-text">
        <profile-bar></profile-bar>
      </span>
    </div>
  </div>
</nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(protected auth: AuthService) { }

  ngOnInit() {
  }

}
