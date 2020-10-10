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
  MatCardModule, MatTabsModule, MatIconModule, MatMenuModule, MatExpansionModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
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
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { S5Component } from './s5/s5.component';
import { TestComponent } from './test/test.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { C2I1Component } from './c2-i1/c2-i1.component';
import { C2I3Component } from './c2-i3/c2-i3.component';
import { EndypComponent } from './endyp/endyp.component';
import { EndyproComponent } from './endypro/endypro.component';
import { MinivacComponent } from './minivac/minivac.component';
import { FraxfaceComponent } from './fraxface/fraxface.component';
import { SpiderComponent } from './spider/spider.component';
import { EpComponent } from './ep/ep.component';
import { CavixComponent } from './cavix/cavix.component';
import { AlquimiaComponent } from './alquimia/alquimia.component';
import { MtoneComponent } from './mtone/mtone.component';
import { TattoostarComponent } from './tattoostar/tattoostar.component';
import { CristalproComponent } from './cristalpro/cristalpro.component';
import { FormalightComponent } from './formalight/formalight.component';
import { MediostarnexproComponent } from './mediostarnexpro/mediostarnexpro.component';
import { StudioComponent } from './studio/studio.component';
import { QuadrostarComponent } from './quadrostar/quadrostar.component';


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
    LoginComponent,
    QuienesSomosComponent,
    S5Component,
    TestComponent,
    ConsultaComponent,
    C2I1Component,
    C2I3Component,
    EndypComponent,
    EndyproComponent,
    MinivacComponent,
    FraxfaceComponent,
    SpiderComponent,
    EpComponent,
    CavixComponent,
    AlquimiaComponent,
    MtoneComponent,
    TattoostarComponent,
    CristalproComponent,
    FormalightComponent,
    MediostarnexproComponent,
    StudioComponent,
    QuadrostarComponent
  ],
  entryComponents:[
    CalendarComponent
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
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
