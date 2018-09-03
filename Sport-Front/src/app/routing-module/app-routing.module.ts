import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaDeportesComponent } from '../deportes/galeria-deportes/galeria-deportes.component';
import { ListaDeportistasComponent } from '../deportistas/lista-deportistas/lista-deportistas.component';

const routes: Routes = [
  {
    path: 'deportes',
    children: [
      {
          path: 'galeria',
          component: GaleriaDeportesComponent
      }
    ]
  },
  {
    path: 'deportistas',
    children: [
      {
          path: 'lista',
          component: ListaDeportistasComponent
      }
    ]
  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
