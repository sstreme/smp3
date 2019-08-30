import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './Usuario';

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
  private _logUrl = "http://localhost/sm_usuarios/login";

  private _usuario : Usuario = null;

  constructor(private _http: HttpClient) { }

  enviarRegistro(datos){
    return this._http.post(this._regUrl,datos,httpOptions);
  }

  enviarLogin(datos){
    return this._http.post(this._logUrl,datos,httpOptions);
  }

  setUsuario(usuario:Usuario){
    this._usuario = {... usuario};
  }

  isLogged(){
    if("token" in localStorage){
      return true;
    }
    return false;
  }
}
