import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
  login(): void {
    this.router.navigate(['/auth']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
