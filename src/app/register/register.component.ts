import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../Usuario';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Respuesta } from '../Respuesta';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  especialidades = [
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
  ];

  datos: Usuario = new Usuario();

  constructor(private _authService: AuthService, _router: Router,
              private _snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(form.valid)
    {
      this._authService.enviarRegistro(this.datos).subscribe(
        res => {
          if((<Respuesta>res).mensaje==='guardado')
          {
            this._snackbar.open("Registrado Exitosamente",'Cerrar',{
              duration: 5000
            });
            form.resetForm();
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