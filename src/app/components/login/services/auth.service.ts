import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/login.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<LoginResponse> {
    const url = `${environment.apiUrl}/api/Login`;
    const body: LoginResponse = {
      username: username,
      password: password
    }
    return this.http.post<LoginResponse>(url, body);
  }
}
