import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino!: string;
  paises!: Country[];
  hayResultados: boolean;
  hayError: boolean;
  
  constructor(private paisesService: PaisesService) { 
    this.hayError = false;
    this.hayResultados = false;
  }

  ngOnInit(): void {
  }

  getTermino(termino: string):void {
    // this.paisesService.getPaisesByName(termino)
    // .subscribe(paises => {
    //   this.paises = paises;
    //   //console.info("Se ejecutó el código de subscripción");
    // },
    // error => {
    //   this.paises = [];
    // });
    this.termino = termino;
    this.paisesService.getPaisesByName(termino)
    .subscribe(paises => {
      this.paises = paises;
      if (paises.length > 0){
        this.hayResultados = true;
      } else {
        this.hayError = true;
        this.hayResultados = false;
      }
    });
  }

  modifyTermino(termino: string): void {
    this.termino = termino;
    // console.info("El termino ha cambiado a: ", this.termino);
    this.hayError = false;
  }
}
