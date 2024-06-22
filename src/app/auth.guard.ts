import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "./service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  async canActivate() {
    if (await this.isAuthenticated()) {
      console.log('Authenticated');
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  async isAuthenticated(): Promise<boolean> {
    try {
      const response = await this.authService.isAuthenticated().toPromise();
      console.log('Authenticated');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}