import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../Usuario';
import { NgForm } from '@angular/forms';

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

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    /* if(form.valid)
    {
      console.log(this.datos);
    } */
    console.log(this.datos);
  }

} 