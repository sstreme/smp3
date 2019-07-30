import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component'
import { RegisterComponent } from './register/register.component';
import { S6Component } from './s6/s6.component';
import { ReporteComponent } from './reporte/reporte.component';
import { S1Component } from './s1/s1.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: IndexComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'trusculpt', component: S6Component },
  { path: 'mediostar', component: S1Component},
  { path: 'reporte', component: ReporteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
