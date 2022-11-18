import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { environment } from '../../../environments/environment';
import { Country } from '../interfaces/paises.interface';

@Injectable({
    providedIn: 'root'
})
export class PaisesService {
    private url: string;

    constructor(private http: HttpClient) {
        this.url = environment.paisesURL;
    }

    getPaisesByName(nombre_pais: string): Observable<Country[]> {
        const endpoint:string = this.url + "/name/" + nombre_pais;
        return this.http.get<Country[]>(endpoint)
        .pipe( catchError( () => of( [] ) ) );
    }
}