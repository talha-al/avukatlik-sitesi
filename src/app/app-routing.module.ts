import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UzmanlikAlanlariComponent } from './uzmanlik-alanlari/uzmanlik-alanlari.component';
import { BlogComponent } from './blog/blog.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { EkibimizComponent } from './ekibimiz/ekibimiz.component';
import { MakaleYazmaComponent } from './makale-yazma/makale-yazma.component';

const routes: Routes = [
  {path:'',component: MainPageComponent},
  {path:'home',component: MainPageComponent},
  {path:'uzmanlik-alanlari',component: UzmanlikAlanlariComponent},
  {path:'ekibimiz',component: EkibimizComponent},
  {path:'hakkimizda',component: HakkimizdaComponent},
  {path:'iletisim',component: IletisimComponent},
  {path:'blog',component: BlogComponent},
  {path:'makale-yazma',component: MakaleYazmaComponent},
  // {path:'404',component: ErrorPageComponent},
  // { path: '**', pathMatch: 'full', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
