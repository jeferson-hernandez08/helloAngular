import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})

export class PaisInputComponent implements OnInit {
  
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();    // Output: Para Emitir el dato 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();    // Output: Para Emitir el dato   

  @Input() placeholder: string = '';      // Recibir dato variable PLace holder de por-capital.component.html 

  debouncer: Subject<string> = new Subject();     // Es un observable
  
  termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))           // ⚠️ Propiedad de Angular para que cuando escriba se demore en cargar
      .subscribe( valor => {
        this.onDebounce.emit( valor );
    });
  }

  buscar() {
    this.onEnter.emit( this.termino );     // Cuando se de enter emitimos el termino
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );

  }

  
}
