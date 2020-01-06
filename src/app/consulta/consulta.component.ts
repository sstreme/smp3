import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  
    nombre: String = "";
    email: String = "";
    telefono: String = "";
    especialidad: String = "";
    pais: String = "";
    estado: String = "";
    ciudad: String = "";
    mensaje: String = "";

  constructor() {
  }

  ngOnInit() {
  }

  enviarConsulta(form:NgForm){
    let datos = {
      nombre:this.nombre,
      email:this.email,
      telefono:this.telefono,
      especialidad:this.especialidad,
      pais:this.pais,
      estado:this.estado,
      ciudad:this.ciudad,
      mensaje:this.mensaje
    }
    if(form.valid){
      console.log(JSON.stringify(datos));
    }
  }

}
