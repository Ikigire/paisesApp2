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
        const endpoint: string = this.url + "/name/" + nombre_pais;
        return this.http.get<Country[]>(endpoint)
        .pipe( catchError( () => of( [] ) ) );
    }

    getPaisesByRegion(nombre_region: string): Observable<Country[]> {
        const endpoint: string = this.url + "/region/" + nombre_region;
        return this.http.get<Country[]>(endpoint)
        .pipe( catchError( () => of( [] ) ) );
    }

    getPaisesByCapital(nombre_capital: string): Observable<Country[]> {
        const endpoint: string = this.url + "/capital/" + nombre_capital;
        return this.http.get<Country[]>(endpoint)
        .pipe( catchError( () => of( [] ) ) );
    }
}