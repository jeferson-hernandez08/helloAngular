import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Cápitan América'];

  borrarHeroe() {
    console.log("Borrando...");
    this.heroes.shift();     // Min 7 Direntiva
  }



 



}
