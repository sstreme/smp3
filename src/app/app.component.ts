import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public dialog: MatDialog) {

  }


  abrirCalendario() {

    
    this.dialog.open(CalendarComponent);
  }
}
