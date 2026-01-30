import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ContadorComponent } from "./contador/contador.component";


@NgModule({
    declarations: [
        ContadorComponent     // 👈 Se declara la clase de /contador.component.
    ],
    exports: [
        ContadorComponent     // 👈 Para Para poner el <app-contador></app-contador> | Se exporta la clase
    ],
    imports: [
        CommonModule         // 👈 Es por si en nuestro componente manejamos Directivas. 
    ]
})

export class ContadorModule {     // Se envia o exporta el Modula para enviar y que la reciba el app.module. 
    
}