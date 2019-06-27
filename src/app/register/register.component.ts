import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  especialidades = [
    { value: 'Anestesiologia', content: 'Anestesiología' },
    { value: 'Arritmias', content: 'Arritmias y Electrofisiología' },
    { value: 'Cardiología', content: 'Cardiología' },
    { value: 'Cirugía', content: 'Cirugía' },
    { value: 'Cardiovascular', content: 'Cirugía cardiovascular' },
    { value: 'Cirugía Plástica', content: 'Cirugía Plástica' },
    { value: 'Dermatología', content: 'Dermatología' },
    { value: 'Ecocardiografía', content: 'Ecocardiografía' },
    { value: 'Emergentología', content: 'Emergentología' },
    { value: 'Empresario', content: 'Empresario' },
    { value: 'Endocrinología', content: 'Endocrinología' },
    { value: 'Enfermedades Infecciosas', content: 'Enfermedades Infecciosas' },
    { value: 'Esteticista/Cosmiatra', content: 'Esteticista/Cosmiatra' },
    { value: 'Flebología', content: 'Flebología' },
    { value: 'Gastroenterología', content: 'Gastroenterología' },
    { value: 'Gineco-Obstetricia', content: 'Gineco-Obstetricia' },
    { value: 'Mamografía', content: 'Mamografía' },
    { value: 'Medicina del Deporte', content: 'Medicina del Deporte' },
    { value: 'Medicina Estética', content: 'Medicina Estética' },
    { value: 'Medicina Familiar', content: 'Medicina Familiar' },
    { value: 'Medicina Física y Rehabilitación', content: 'Medicina Física y Rehabilitación' },
    { value: 'Medicina Reproductiva', content: 'Medicina Reproductiva' },
    { value: 'Neonatología', content: 'Neonatología' },
    { value: 'Neumonología', content: 'Neumonología' },
    { value: 'Nutrición', content: 'Nutrición' },
    { value: 'Oftalmología', content: 'Oftalmología' },
    { value: 'Ortopedia y Traumatología', content: 'Ortopedia y Traumatología' },
    { value: 'Otorinolaringología', content: 'Otorinolaringología' },
    { value: 'Pediatrí', content: 'Pediatría' },
    { value: 'Resonancia', content: 'Resonancia' },
    { value: 'Reumatología', content: 'Reumatología' },
    { value: 'Terapia intensiva', content: 'Terapia intensiva' },
    { value: 'Tocoginecología', content: 'Tocoginecología' },
    { value: 'Urología', content: 'Urología' },
    { value: 'Veterinaria', content: 'Veterinaria' }
  ];

  clientForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
    nombre: new FormControl(''),
    telefono_fijo: new FormControl(''),
    telefono_movil: new FormControl(''),
    especialidad: new FormControl(''),
    razon: new FormControl(''),
    pais: new FormControl(''),
    estado: new FormControl(''),
    municipio: new FormControl(''),
    direccion: new FormControl(''),
    mensaje: new FormControl('')
  })

  registeredAddress: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.verify_email();
    if (this.clientForm.valid && !this.registeredAddress) {
      let userData = {
        email: this.clientForm.controls['email'].value,
        password: this.clientForm.controls['password'].value,
        nombre: this.clientForm.controls['nombre'].value,
        telefono_fijo: this.clientForm.controls['telefono_fijo'].value,
        telefono_movil: this.clientForm.controls['telefono_movil'].value,
        especialidad: this.clientForm.controls['especialidad'].value,
        razon: this.clientForm.controls['razon'].value,
        pais: this.clientForm.controls['pais'].value,
        estado: this.clientForm.controls['estado'].value,
        municipio: this.clientForm.controls['municipio'].value,
        direccion: this.clientForm.controls['direccion'].value,
        mensaje: this.clientForm.controls['mensaje'].value
      }
      console.log(JSON.stringify(userData));
    }
  }

  verify_email() {
    let email = {
      email: this.clientForm.controls['email'].value
    }

    this._authService.verifyEmail(email).subscribe(
      res => {
        this.registeredAddress = res.exists;
      },
      err => console.log(err)
    )
  }


} 