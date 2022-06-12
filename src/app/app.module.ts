import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PictureComponent } from './components/picture/picture.component';
import { NombreJoueursComponent } from './components/nombre-joueurs/nombre-joueurs.component';
import { NombreManchesComponent } from './components/nombre-manches/nombre-manches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PictureComponent,
    NombreJoueursComponent,
    NombreManchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
