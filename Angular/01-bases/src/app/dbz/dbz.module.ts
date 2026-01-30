import { NgModule } from '@angular/core';         // Propiedades propiamente de angular.
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent    // 👈 Se declarada
  ],
  exports: [
    MainPageComponent     // 👈 Luego se manda o se exporta
  ],
  imports: [
    CommonModule,
    FormsModule          // Importamos este para evitar el refreh del form cuando damos click
  ]
})

export class DbzModule {    // 👈 Se manda o se Exporta

}
