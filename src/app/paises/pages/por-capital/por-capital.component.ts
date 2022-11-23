import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino!: string;
  paises!: Country[];
  hayError: boolean;
  hayResultados: boolean;

  constructor(
    private paisesService: PaisesService
  ) { 
    this.hayError = false;
    this.hayResultados = false;
  }

  ngOnInit(): void {
  }

  getTermino(termino: string):void {
    this.termino = termino;
    this.paisesService.getPaisesByCapital(termino)
    .subscribe(paises => {
      this.paises = paises;
      this.hayResultados = paises.length > 0? true: false;
      this.hayError = paises.length? false: true;
    });
  }

  modifyTermino(termino: string): void {
    this.termino = termino;
    // console.info("El termino ha cambiado a: ", this.termino);
    this.hayError = false;
  }
}
