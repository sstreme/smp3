import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { S6Component } from './s6/s6.component';
import { ReporteComponent } from './reporte/reporte.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { S3Component } from './s3/s3.component';
import { S4Component } from './s4/s4.component';
import { WebclubComponent } from './webclub/webclub.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: IndexComponent },
  { path: 'webclub', component: WebclubComponent },
  { path: 'trusculpt', component: S6Component },
  { path: 'mediostar', component: S1Component},
  { path: 'endymed', component: S2Component},
  { path: 'dermablate', component: S3Component},
  { path: 'juliet', component: S4Component},
  { path: 'reporte', component: ReporteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
