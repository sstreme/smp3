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
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { S5Component } from './s5/s5.component';
import { TestComponent } from './test/test.component';
import { C2I1Component } from './c2-i1/c2-i1.component';
import { C2I3Component } from './c2-i3/c2-i3.component';
import { EndypComponent } from './endyp/endyp.component';
import { EndyproComponent } from './endypro/endypro.component';
import { MinivacComponent } from './minivac/minivac.component';
import { FraxfaceComponent } from './fraxface/fraxface.component';
import { SpiderComponent } from './spider/spider.component';
import { EpComponent } from './ep/ep.component';
import { AlquimiaComponent } from './alquimia/alquimia.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: IndexComponent },
  { path: 'webclub', component: WebclubComponent },
  { path: 'trusculpt', component: S6Component },
  { path: 'mediostar', component: S1Component },
  { path: 'endymed', component: S2Component },
  { path: 'dermablate', component: S3Component },
  { path: 'juliet', component: S4Component },
  { path: 'reporte', component: ReporteComponent },
  { path: 'quienes_somos', component: QuienesSomosComponent },
  { path: 'cutera', component: S5Component },
  { path: 'test', component: TestComponent },
  { path: 'cavix', component: C2I1Component },
  { path: 'janus', component: C2I3Component },
  { path: 'endymedpure', component: EndypComponent },
  { path: 'endymedpro', component: EndyproComponent },
  { path: 'minivac', component: MinivacComponent },
  { path: 'fraxface', component: FraxfaceComponent },
  { path: 'spider', component: SpiderComponent },
  { path: 'ep', component: EpComponent},
  {path: 'alquimia', component: AlquimiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
