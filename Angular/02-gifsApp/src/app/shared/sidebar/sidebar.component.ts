import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';     // Importamos el GifsService

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;    // this para capturar el gifsService del servicio
  }

  constructor(private gifsService: GifsService) {     // 👈 Aquí para importar el GifsService | Tambien llamado inyeccion para tomar el GifsService. 

  }

  buscar( termino: string) {
    console.log(termino);
  }



  

}
