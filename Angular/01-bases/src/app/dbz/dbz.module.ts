import { NgModule } from '@angular/core';         // Propiedades propiamente de angular.
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent    // 👈 Se declarada
  ],
  exports: [
    MainPageComponent     // 👈 Luego se manda o se exporta
  ],
  imports: [
    CommonModule,
    FormsModule          // Importamos este para evitar el refreh del form cuando damos click
  ],
  providers: [     
    DbzService
  ]
})

export class DbzModule {    // 👈 Se manda o se Exporta

}
