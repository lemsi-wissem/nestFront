import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  details = { username: '', password: '' };

  constructor(private authService: AuthService) { }

  signIn() {
    this.authService.signIn(this.details).subscribe();
  }
}
