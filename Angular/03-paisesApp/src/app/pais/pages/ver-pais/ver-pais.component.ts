import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})

export class VerPaisComponent implements OnInit {

  pais!: Country;    // !: confia en mi tratalo como nulo

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService            // Inyeccion para usar el pais.service.ts y poder consumir el servicio
  
  ) { }    // Inyeccion 

  ngOnInit(): void {

    // Segunda forma con rxjs
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );


    // Primera forma de hacerlo sin rxJS
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.paisService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });

    //   });

      
  }

}
