import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component'
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'index', component: IndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo:'/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
