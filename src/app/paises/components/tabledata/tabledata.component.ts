import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {

  @Input() paises!: Country[];

  constructor() { }

  ngOnInit(): void {
  }

}
