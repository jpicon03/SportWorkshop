import { Component, OnInit } from '@angular/core';
import { DeportesService } from '../services/deportes.service';
import { Deporte } from '../models/deporte.model';

@Component({
  selector: 'app-galeria-deportes',
  templateUrl: './galeria-deportes.component.html',
  styleUrls: ['./galeria-deportes.component.css']
})
export class GaleriaDeportesComponent implements OnInit {

  deportes: Deporte[];

  constructor(private deportesService: DeportesService) { }

  ngOnInit() {
    this.getDeportes();
  }

  getDeportes(): void {
    this.deportesService.getDeportes().subscribe(deportes => this.deportes = deportes);
  }

}
