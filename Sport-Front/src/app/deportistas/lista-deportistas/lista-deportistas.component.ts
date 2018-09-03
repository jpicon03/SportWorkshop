import { Component, OnInit } from '@angular/core';
import { DeportistaService } from '../services/deportista.service';
import { Deportista } from '../models/deportista.model';

@Component({
  selector: 'app-lista-deportistas',
  templateUrl: './lista-deportistas.component.html',
  styleUrls: ['./lista-deportistas.component.css']
})
export class ListaDeportistasComponent implements OnInit {

  deportistas: Deportista[];

  constructor(private deportistaService: DeportistaService) { }

  ngOnInit() {
    this.getDeportistas();
  }

  getDeportistas(): void {
    this.deportistaService.getDeportistas().subscribe(deportistas => this.deportistas = deportistas);
  }

}
