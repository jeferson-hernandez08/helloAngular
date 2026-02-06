import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor( private http: HttpClient ) { }     // 👈 Importar el HttpClientModule de app.module.ts o inyeccion

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca3');
  }

  buscarPais( termino: string ): Observable<Country[]> {   // Observable que emite un arreglo de pais Country plantilla de datos tipados

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url , { params: this.httpParams } );
  }

  buscarCapital( termino: string ): Observable<Country[]> {   // Observable que emite un arreglo de pais Country plantilla de datos tipados

    const url = `${ this.apiUrl }/capital/${ termino }`;      // Url Api dinamica, le pasamos el termino que seria el pais
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {   // Observable que emite un arreglo de pais Country plantilla de datos tipados

    const url = `${ this.apiUrl }/alpha/${ id }`;      // Url Api dinamica, le pasamos el termino que seria el id del pais
    return this.http
      .get<Country[]>( url )
        .pipe(
          map( paises => paises[0] )
        );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;     // Url Api de restCountries por region

    return this.http.get<Country[]>( url, { params: this.httpParams } )
          .pipe(
            tap(console.log)            
          )

  }



}
