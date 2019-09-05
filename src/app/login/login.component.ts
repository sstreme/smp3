import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Respuesta } from "../Respuesta";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos: Usuario = new Usuario();

  constructor(private _authService: AuthService, private _router: Router,
              private _snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this._authService.enviarLogin(this.datos).subscribe(
        res => {
          if((<Respuesta>res).mensaje==='loggeado'){
            console.log("Entre a la aplicacion");
            localStorage.setItem("token",JSON.stringify((<Respuesta>res).token));
            localStorage.setItem("nombre",(<Respuesta>res).usuario.nombre);
            localStorage.setItem("email",(<Respuesta>res).usuario.correo);
            this._router.navigate(['/inicio']);
          }
          if((<Respuesta>res).mensaje==='equivocada'){
            this._snackbar.open("La contraseña que introdujo es erronea",'Cerrar',{
              duration: 3000
            });
          }
          if((<Respuesta>res).mensaje==='inexistente'){
            this._snackbar.open("No existe una cuenta con esta dirección de correo",'Cerrar',{
              duration: 3000
            });
          }
        }
      );
    }
  }

}
