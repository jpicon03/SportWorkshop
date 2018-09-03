import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaService } from './services/deportista.service';
import { ListaDeportistasComponent } from './lista-deportistas/lista-deportistas.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        ListaDeportistasComponent
    ],
    providers: [DeportistaService],
    bootstrap: [ListaDeportistasComponent]
})
export class DeportistasModule {}
