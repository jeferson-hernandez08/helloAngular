/*
    ===== Código de TypeScript =====
    ===== Aquí se Compila Cada Ejercicio ======¿
*/

//import { calculaISV, Producto } from "./ejercicios/06-desestructuracion-funcion";    // Aqui el error es por la ruta
import { calculaISV, Producto } from "./06-desestructuracion-funcion";

/*======= Importaciones y Exportaciones =======*/
const carritoCompras: Producto[] = [
  {
    desc: 'Telefono 1',
    precio: 100
  },
  {
    desc: 'Telefono 2',
    precio: 150
  }
];

const [total, isv] = calculaISV( carritoCompras );

console.log('Total', total);
console.log('ISV', isv)

/*
  Obtenemos el producto de otra importacion,
  Es muy importarte para la reurilizacion de codigo si deseas tener la interface Producto, 
  esto es para no tener que repetir codigo dos veces si no que podemos importar la interface Producto para 
  poder reutilizarlo.
  
  Más en la documentación Word.
  
*/




