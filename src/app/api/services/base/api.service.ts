import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public get(route: string, params?: any): Observable<any> {
    return this.http.get(`${this.host}/${route}`, {
      params: params
    });
  }

  public post(route: string, data: any, params?: any): Observable<any> {
    return this.http.post(`${this.host}/${route}`, data, params);
  }

  public put(route: string, data: any, params?: any): Observable<any> {
    return this.http.put(`${this.host}/${route}`, data, params);
  }

  public delete(route: string, params?: any): Observable<any> {
    return this.http.delete(`${this.host}/${route}`, params);
  }
}
