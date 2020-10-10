import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

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

  constructor(private _snackbar: MatSnackBar) {
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
      this._snackbar.open("Consulta enviada",'Cerrar',{
        duration: 5000
      });
      form.resetForm();
    }
  }

}
