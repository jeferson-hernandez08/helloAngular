/*
    ===== Código de TypeScript =====
    ===== Aquí se Compila Cada Ejercicio ======
*/

// Funciones
function sumar(a:number, b:number): number {
  //return (a + b).toString();   // Para transformar a number a string
  return a + b;
}

// Funcion Flecha
const sumarFlecha = (a:number ,b:number):number => {
  return a + b; 
}

function multiplicar(numero:number, otroNUmero?:number, base:number = 2):number {
  return numero * base; 
}

//const resultado = sumar(10, 5);
// const resultado = multiplicar(5, 0, 10);
// console.log(resultado);
/*
    En TS siempre poner el tipo a los argumentos
*/

/*======= Funciones con Objetos Como Argumentos =======*/
interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;   // Asi se define la funcion en la interface para pasarla

}

function curar(personaje:PersonajeLOR, curarX:number):void {
  personaje.pv += curarX;
  // console.log(personaje);

}

const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Singer',
  pv: 80,
  mostrarHp() {
    console.log( 'Puntos de vida de personaje:', this.pv );
  }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp(); 
/*
    - Si no queremos retornar nada le damos void para que retorne nada la funcion
    - Interfaces: La interfaces son como clases tontas, la interface no sabe como funciona esta funcion, no sabe como
      como funcionanlos metodos, no saben si teien getter , setter , lo unico que hace la interface es 
      asegurarse que el objeto tenga nombre , puntos de vida y funcion. 
*/











/*
  min 5    
*/



