import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  ready: boolean;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) {
    this.ready = false;
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   // console.log(params['id']);
    //   const id: string = params['id'];
    //   if (id){
    //     this.paisesService.getPaisById(id).subscribe(pais => {
    //       if(pais) {
    //         this.pais = pais[0];
    //         console.info("Pais: ", this.pais);
    //       }
    //     })
    //   }
    // });
    this.activatedRoute.params
    .pipe( switchMap( ({id}) => this.paisesService.getPaisById(id) ) )
    .subscribe( paises => {
      this.pais = paises[0];
      this.ready = true;
      // console.info("Pais: ", this.pais);
    } );
  }

}
