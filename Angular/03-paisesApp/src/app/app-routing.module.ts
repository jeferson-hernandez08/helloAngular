import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',         // Le decimos con este path es que se va mostar un componente cuando ingresemos a http://localhost:4200/region
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent  
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',         // ruta para errores
        redirectTo: ''
    }
]; 


@NgModule ({
    imports: [
        RouterModule.forRoot(routes)      // 👈 Se importa como forRoot como rutas principales, esto propio de angular
    ],
    exports:[
        RouterModule            // 👈 Lo exportamos o enviamos para que lo podmos usar en cualquier lugar.
    ]
})

export class AppRoutingModule {

}