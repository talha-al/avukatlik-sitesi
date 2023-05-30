import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { UzmanlikAlanlariComponent } from './uzmanlik-alanlari/uzmanlik-alanlari.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuHeaderComponent,
    FooterComponent,
    UzmanlikAlanlariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
