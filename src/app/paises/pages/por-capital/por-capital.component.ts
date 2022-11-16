import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino!: string;

  constructor() { }

  ngOnInit(): void {
  }

  getTermino(termino: string):void {
    this.termino = termino;
    alert("El termino recibido es: " + this.termino);
  }

  modifyTermino(termino: string): void {
    this.termino = termino;
    console.info("El termino ha cambiado a: ", this.termino);
  }
}
