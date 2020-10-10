import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  enviarReporte(form:NgForm){
    if(form.valid){
      this._snackbar.open("Reporte Enviado",'Cerrar',{
        duration: 5000
      });
      form.resetForm();
    }
  }

}
