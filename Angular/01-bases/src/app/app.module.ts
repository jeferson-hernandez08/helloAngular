import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,          // 👈 Importamos el Modulo HeroesModule para poder renderizar <app-listado></app-listado> 
    ContadorModule,        // 👈 Recibe el Modulo ContadorModule para poder renderizar <app-contador></app-contador>
    DbzModule              // 👈 Recibe el Modulo DbzModule para poder renderizar <app-main-page> </app-main-page>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
