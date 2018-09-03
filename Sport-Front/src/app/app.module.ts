import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeportesModule } from './/deportes/deportes.module';
import { DeportistasModule } from './/deportistas/deportistas.module';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DeportesModule,
    DeportistasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
