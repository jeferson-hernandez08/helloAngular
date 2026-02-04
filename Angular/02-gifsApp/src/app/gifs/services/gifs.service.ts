import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string = 'zcaJXPLI5iaWaTSmL3oduvJVcdxekw0N';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];

  // TODO: Cambiar any por su tipo
  public resultados: Gif[] = [];      // Resultado de gifs

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {   // Peticiones http de Angular para el consumo de la API 

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];    // Para guardar cuando se recargue
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []; 
    // if ( localStorage.getItem('historial')) {
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }

  }

  buscarGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();

    
    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10); 

      localStorage.setItem('historial', JSON.stringify(this._historial) );
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);

    //console.log(params.toString());

    // Segunda Forma Observable: Modulo que ya viene en angular de http
    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params } )
    .subscribe(( resp ) => {
      console.log( resp.data );  
      this.resultados = resp.data;
      // 👇 Para resultado
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });
    


    // Primera Forma con fetch: 
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=zcaJXPLI5iaWaTSmL3oduvJVcdxekw0N&q=dragon ball z&limit=10')
    // .then( resp => {
    //   resp.json().then(data => {
    //     console.log(data);

    //   })
    // })


  }
}
