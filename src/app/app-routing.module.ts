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
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component: MainPageComponent},
  {path:'uzmanlik-alanlari',component: UzmanlikAlanlariComponent},
  {path:'ekibimiz',component: EkibimizComponent},
  {path:'hakkimizda',component: HakkimizdaComponent},
  {path:'iletisim',component: IletisimComponent},
  {path:'blog',component: BlogComponent},
  {path:'makale',component: MakaleYazmaComponent},
  {path:'**', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
