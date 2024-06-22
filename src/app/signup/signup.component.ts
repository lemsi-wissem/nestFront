import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {
  }
  credentials = { username: '', password: '' };

  signup() {
    this.authService.signup(this.credentials).subscribe({
      next: () => {
        console.log('User is registered');
        this.router.navigate(['/login']);
      },
      error: (error:any) => {
        console.error(error);
      }
    })
  }
}
