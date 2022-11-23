import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  termino!:string;
  paises!: Country[];
  hayResultados: boolean;
  hayError: boolean;

  constructor(
    private paisesService: PaisesService
  ) {   
    this.hayResultados = false;
    this.hayError = false;
  }

  ngOnInit(): void {
  }

  getTermino(termino: string):void {
    this.termino = termino;
    this.paisesService.getPaisesByRegion(termino)
    .subscribe(paises => {
      this.paises = paises;
      if (paises.length > 0) {
        this.hayResultados = true;
        // this.hayError = false;
      } else {
        this.hayResultados = false;
        this.hayError = true;
      }
    });
  }
  
  modifyTermino(termino: string): void {
    this.termino = termino;
    // console.info("El termino ha cambiado a: ", this.termino);
    this.hayError = false;
  }
}
