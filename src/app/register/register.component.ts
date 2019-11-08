import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../Usuario';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Respuesta } from '../Respuesta';
import { Cliente } from '../Cliente';
import { Registro } from '../Registro';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*especialidades = [
    'Anestesiología',
    'Arritmias y Electrofisiología',
    'Cardiología',
    'Cirugía',
    'Cirugía cardiovascular',
    'Cirugía Plástica',
    'Dermatología',
    'Ecocardiografía',
    'Emergentología',
    'Empresario',
    'Endocrinología',
    'Enfermedades Infecciosas',
    'Esteticista/Cosmiatra',
    'Flebología',
    'Gastroenterología',
    'Gineco-Obstetricia',
    'Mamografía',
    'Medicina del Deporte',
    'Medicina Estética',
    'Medicina Familiar',
    'Medicina Física y Rehabilitación',
    'Medicina Reproductiva',
    'Neonatología',
    'Neumonología',
    'Nutrición',
    'Oftalmología',
    'Ortopedia y Traumatología',
    'Otorinolaringología',
    'Pediatría',
    'Resonancia',
    'Reumatología',
    'Terapia intensiva',
    'Tocoginecología',
    'Urología',
    'Veterinaria'
  ];*/

  email: string;
  cliente: Cliente = new Cliente();
  usuario: Usuario = new Usuario();
  registro: Registro;
  nuevo: boolean = true;

  constructor(private _authService: AuthService, _router: Router,
              private _snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  buscarEmail(form: NgForm){
    if(form.valid){
      this._authService.buscarporCorreo({email: this.email}).subscribe(
        res => {
          if((<Respuesta>res).mensaje==='inexistente'){
            this._snackbar.open("No existe usuario con este email",'Cerrar',{
              duration: 5000
            });
            form.resetForm();
          }
          else{
            let usuario = (<Respuesta>res).cliente;
            this.usuario.email = this.email;
            this.cliente = usuario;
            this.nuevo=false;
          }
        }
      );
    }
  }

  onSubmit(form: NgForm) {
    if(form.valid)
    {
      this.cliente.email=this.usuario.email;
      this.registro = new Registro(this.usuario,this.cliente,this.nuevo);
      //console.log(JSON.stringify(this.registro));
      this._authService.enviarRegistro(this.registro).subscribe(
        res => {
          if((<Respuesta>res).mensaje==='guardado')
          {
            this._snackbar.open("Registrado Exitosamente",'Cerrar',{
              duration: 5000
            });
            form.resetForm();
            this.nuevo=true;
          }
          if((<Respuesta>res).mensaje==='existe'){
            this._snackbar.open("Ya existe usuario con este correo",'Cerrar',{
              duration: 5000
            });
          }
        }
      );
    }
    
  }

} 