import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
    <h3>Login</h3>
    <div class="alert alert-danger" *ngIf="message">{{message}}</div>
    <form [formGroup]="loginForm" (submit)="login()">
      <div class="form-group">
        <label for="">Username:</label>
        <input type="text" class="form-control" formControlName="username">
      </div>
      <div class="form-group">
        <label for="">Password:</label>
        <input type="text" class="form-control" formControlName="password">
      </div>
      <input type="submit" class="btn btn-success mx-auto">
    </form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  message: string;

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder,
            private auth: AuthService) { }

  login() {
    this.auth.login(this.loginForm.value);
  }

  ngOnInit() {
    this.message = this.auth.getMessage();
  }

}
