import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations: [ 
        HeroeComponent,       // Declaramos los dos componentes min 8
        ListadoComponent
    ],
    exports: [
        ListadoComponent   // 👈 Para poner el <app-listado></app-listado>
    ],
    imports: [
        CommonModule
    ]
})
 
export class HeroesModule {

}

/*
    Cada modulo de este es completamente independiente e invisible a los demas modulos de la aplicacion
*/
