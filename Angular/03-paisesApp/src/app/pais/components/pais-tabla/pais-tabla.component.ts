import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})

export class PaisTablaComponent {       // Este es el hijo

  @Input() paises: Country[] = [];      // 👈 Uso de Input: @Input() es un decorador de Angular que permite que un componente hijo reciba datos desde un componente padre, este componente espera que otro componente le mande datos

  constructor() { }


}
