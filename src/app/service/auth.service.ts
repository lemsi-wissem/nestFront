import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    // Replace with your backend API endpoint
    return this.http.post('http://localhost:3000/auth/login', credentials);
  }

  signIn(details: any): Observable<any> {
    // Replace with your backend API endpoint
    return this.http.post('http://localhost:3000/users', details);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  signup(credentials: {password: string; username: string}) {
    return this.http.post('http://localhost:3000/users', credentials);
  }
}
