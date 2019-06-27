import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _emailUrl = "http://localhost:3000/clients/email";

  constructor(private http: HttpClient) { }

  verifyEmail(email){
    return this.http.post<any>(this._emailUrl,email);
  }
}
