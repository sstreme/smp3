import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component'
import { RegisterComponent } from './register/register.component';
import { S6Component } from './s6/s6.component';

const routes: Routes = [
  {path:'index', component: IndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'trusculpt', component: S6Component},
  {path: '', redirectTo:'/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
