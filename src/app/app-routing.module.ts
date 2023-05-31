import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UzmanlikAlanlariComponent } from './uzmanlik-alanlari/uzmanlik-alanlari.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:'',component: MainPageComponent},
  {path:'home',component: MainPageComponent},
  {path:'uzmanlik-alanlari',component: UzmanlikAlanlariComponent},
  {path:'blog',component: BlogComponent},
  // {path:'404',component: ErrorPageComponent},
  // { path: '**', pathMatch: 'full', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
