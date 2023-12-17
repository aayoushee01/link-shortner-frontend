import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviornment/enviornment.prod';
@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getUser(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/users/userdetail`, { headers });
  }

  getAllLinksForUser(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/users/urls`, {headers});
  }

  createLinkForUser(bigUrl: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    const requestBody = { bigUrl };
    return this.http.post<any>(`${this.apiUrl}/short-links/shorten`, requestBody, { headers });
  }

  updateLink(linkId: number, updatedLinkData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/links/${linkId}`, updatedLinkData);
  }

  deleteLink(linkId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/links/${linkId}`);
  }

  getAnalyticsData(linkId : string, startTime: string, endTime:string): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<any>(`${this.apiUrl}/users/hourlyerror?linkId=${linkId}&startTime=${startTime}&endTime=${endTime}`, {headers});
  }
}