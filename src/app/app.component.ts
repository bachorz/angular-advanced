import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  // constructor(protected auth: AuthService) {
  // this.auth.state.subscribe(
  //   authorized => this.tab = authorized ? 'profile' : 'login'
  // );
  // }
}
