import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }  // Inyectamos sevicio PARA USAR pais.service.ts y usas el metodo api buscarRegion( )


  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) return;     // Evitar múltiples peticiones innecesarias (Opcional) 
    
    this.regionActiva = region;      // Se guarda la región activa cuando el usuario dió click
    this.paises = [];             // Limpiar para que quede mas rapido

    this.paisService.buscarRegion( region )   // Le pasamos la region en onclick regiones.
      .subscribe( (paises) => {         // Lo consumimos con el subscribe y lo guardamos en el array paises
        //console.log(paises);
        this.paises = paises;       

      }, (err) => {
        // console.log('Error');
        console.log(err);
        //this.hayError = true;
        this.paises   = [];
      });




    // TODO: Cargar o hacer el llamado al servicio 

  }


}


/* 

🧠 ¿QUÉ ESTÁ PASANDO INTERNAMENTE? (IMPORTANTE)
🔄 Flujo completo

1. Usuario hace click en un botón

2. (click)="activarRegion(region)"

3. Se guarda la región activa

4. Se llama al servicio

5. HttpClient consulta la API

6. Angular recibe los datos

7. this.paises se actualiza

8. Angular detecta el cambio

9. <app-pais-tabla> se renderiza

💥 Todo automático gracias a data binding


🎓 CONCEPTO CLAVE QUE ESTÁS APRENDIENDO

✔ Comunicación Componente → Servicio
✔ Renderizado condicional *ngIf
✔ Reutilización de componentes
✔ Estado visual (regionActiva)
✔ Consumo real de API REST




*/
