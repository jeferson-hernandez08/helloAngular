import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})

export class PorPaisComponent  {

  termino : string = "";
  hayError: boolean = false;
  paises  : Country[] = [];           //  Interface: Plantilla de todos los datos ya tipados que debemos de usar de la API.

  constructor( private paisService: PaisService ) { }    // Inyeccion: Usar el archivo pais.service o traernos el pais.service 
  buscar( termino: string ) {

    this.hayError = false;  
    this.termino = termino;

    this.paisService.buscarPais( termino )
      .subscribe( (paises) => {
        console.log(paises); 
        this.paises = paises;
        
      }, (err) => {
        // console.log('Error');
        // console.log(err);
        this.hayError = true;
        this.paises   = [];
      });

  } 

  sugerencias( termino: string ) {
    this.hayError = false;
    // TODO: crear sugerecias

  }

  

  


}
