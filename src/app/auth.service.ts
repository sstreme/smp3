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

  private _regUrl = "http://localhost/sm_usuarios/registro.php";
  private _emailUrl = "http://localhost/sm_usuarios/email.php";
  private _logUrl = "http://localhost/sm_usuarios/login";

  constructor(private _http: HttpClient) { }

  buscarporCorreo(datos){
    return this._http.post(this._emailUrl,datos,httpOptions);
  }

  enviarRegistro(datos){
    return this._http.post(this._regUrl,datos,httpOptions);
  }

  enviarLogin(datos){
    return this._http.post(this._logUrl,datos,httpOptions);
  }

  getNombre(){
    return localStorage.getItem('nombre');
  }

  isLogged(){
    if("token" in localStorage && "nombre" in localStorage && "email" in localStorage){
      return true;
    }
    return false;
  }
}
