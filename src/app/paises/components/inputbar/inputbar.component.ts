import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-inputbar',
  templateUrl: './inputbar.component.html',
  styleUrls: ['./inputbar.component.css']
})
export class InputbarComponent implements OnInit {

  termino: string;
  
  @Output() onEnter: EventEmitter<string>;
  @Output() onChangeTermino: EventEmitter<string>;
  debouncer: Subject<string>;

  constructor() { 
    this.termino = "";
    this.onEnter = new EventEmitter<string>();
    this.onChangeTermino = new EventEmitter<string>();
    this.debouncer = new Subject<string>();
  }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(1000))
    .subscribe((valor) => {
      this.onChangeTermino.emit(valor);
    });
  }

  submit(): void {
    this.onEnter.emit(this.termino);
  }

  onChangeText():void {
    this.debouncer.next(this.termino);
  }
}
