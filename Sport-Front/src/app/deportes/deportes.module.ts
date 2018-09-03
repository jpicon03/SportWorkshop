import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportesService } from './services/deportes.service';
import { GaleriaDeportesComponent } from './galeria-deportes/galeria-deportes.component';
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
        GaleriaDeportesComponent
    ],
    providers: [DeportesService],
    bootstrap: [GaleriaDeportesComponent]
})
export class DeportesModule {}
