import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviornment/enviornment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password });
  }

  register(username:string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, { username, email, password });
  }

}
