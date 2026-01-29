import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html' 
})
export class HeroeComponent {

    nombre: string = 'Iron Man';
    edad: number   = 45;

    get nombreCapitalizado(): string {  // get: Obtener un dato
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        console.log('heyyy');
        this.edad = 30;
    }

}