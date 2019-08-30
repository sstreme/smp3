import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { CalendarComponent } from './calendar/calendar.component';

import { FullCalendarModule } from "@fullcalendar/angular";
import { RegisterComponent } from './register/register.component';


import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, 
  MatCardModule, MatTabsModule, MatIconModule, MatMenuModule, MatExpansionModule, MatSnackBarModule } from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';
import { S6Component } from './s6/s6.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReporteComponent } from './reporte/reporte.component';
import { DigitOnlyDirective } from './digit-only.directive';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { S3Component } from './s3/s3.component';
import { S4Component } from './s4/s4.component';
import { WebclubComponent } from './webclub/webclub.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    Carousel1Component,
    Carousel2Component,
    CalendarComponent,
    RegisterComponent,
    NotFoundComponent,
    S6Component,
    FooterComponent,
    ReporteComponent,
    DigitOnlyDirective,
    S1Component,
    S2Component,
    S3Component,
    S4Component,
    WebclubComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatExpansionModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
