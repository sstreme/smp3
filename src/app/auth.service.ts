import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _regUrl = "http://localhost/sm_usuarios/registro";

  constructor(private _http: HttpClient) { }

  enviarRegistro(datos){
    return this._http.post(this._regUrl,datos,httpOptions);
  }
}
