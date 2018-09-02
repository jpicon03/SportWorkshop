import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaleriaDeportesComponent } from './galeria-deportes/galeria-deportes.component';
import { ListaDeportistasComponent } from './lista-deportistas/lista-deportistas.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaDeportesComponent,
    ListaDeportistasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
