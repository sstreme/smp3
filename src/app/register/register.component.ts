import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  especialidades = [
    { value: 'anestesiologia', content: 'Anestesiología' },
    { value: 'arritmias', content: 'Arritmias y Electrofisiología' },
    { value: 'cardiologia', content: 'Cardiología' },
    { value: 'cirugia', content: 'Cirugía' },
    { value: 'cardiovascular', content: 'Cirugía cardiovascular' },
    { value: 'plastica', content: 'Cirugía plástica' },
    { value: 'dermatologia', content: 'Dermatología' },
    { value: 'ecocardiografia', content: 'Ecocardiografía' },
    { value: 'emergentologia', content: 'Emergentología' },
    { value: 'empresario', content: 'Empresario' },
    { value: 'endocrinologia', content: 'Endocrinología' },
    { value: 'infecciosas', content: 'Enfermedades Infecciosas' },
    { value: 'esteticista', content: 'Esteticista/Cosmiatra' },
    { value: 'flebologia', content: 'Flebología' },
    { value: 'gastroenterologia', content: 'Gastroenterología' },
    { value: 'gineco-obstetricia', content: 'Gineco-Obstetricia' },
    { value: 'mamografia', content: 'Mamografía' },
    { value: 'deporte', content: 'Medicina del deporte' },
    { value: 'estetica', content: 'Medicina estética' },
    { value: 'familiar', content: 'Medicina Familiar' },
    { value: 'fisica', content: 'Medicina Física y Rehabilitación' },
    { value: 'reproductiva', content: 'Medicina Reproductiva' },
    { value: 'neonatologia', content: 'Neonatología' },
    { value: 'neumonologia', content: 'Neumonología' },
    { value: 'nutricion', content: 'Nutrición' },
    { value: 'oftalmologia', content: 'Oftalmología' },
    { value: 'ortopedia', content: 'Ortopedia y Traumatología' },
    { value: 'otorinolaringologia', content: 'Otorinolaringología' },
    { value: 'pediatria', content: 'Pediatría' },
    { value: 'resonancia', content: 'Resonancia' },
    { value: 'reumatologia', content: 'Reumatología' },
    { value: 'intensiva', content: 'Terapia intensiva' },
    { value: 'tocoginecologia', content: 'Tocoginecología' },
    { value: 'urologia', content: 'Urología' },
    { value: 'veterinaria', content: 'Veterinaria' }
  ];


  userData = {};
  isValidUser: boolean = false;
  alreadyExist: boolean = false;

  constructor() { }

  ngOnInit() {
  }


} 