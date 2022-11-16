import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  getTermino(termino: string):void {
    this.termino = termino;
    alert("El termino recibido es: " + this.termino);
  }
}
