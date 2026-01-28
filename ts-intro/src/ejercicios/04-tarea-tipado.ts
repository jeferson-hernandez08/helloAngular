/*
    ===== Código de TypeScript =====
    ===== Aquí se Compila Cada Ejercicio ======
*/

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion,
  mostrarDireccion: () => string;
}

interface Direccion {    // Para Trabajar intefaces anidadas
  calle: string;
  pais: string;
  ciudad: string
} 

const superHeroe: SuperHeroe = {   // Onjeto de SuperHeroe
  nombre: 'Spiderman',
  edad:30,
  direccion: {    // Objeto anidado
    calle: 'Main st',
    pais: 'pais',
    ciudad: 'NY'
  },
  mostrarDireccion() {
    return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
  }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion ); 

// superHeroe.direccion.ciudad.   TS nos indica tipo de datos



/*
  min 6:32   
*/



