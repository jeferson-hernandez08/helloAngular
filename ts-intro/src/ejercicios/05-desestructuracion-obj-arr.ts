/*
    ===== Código de TypeScript =====
    ===== Aquí se Compila Cada Ejercicio ======
*/

/*======= Desestructuracón de Objetos =======*/
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed sheeran',
    anio: 2015
  }
}

const { volumen, segundo, cancion, detalles } = reproductor;   // Extraer datos
const { autor } = detalles;         // Extraer dato de manera anidada

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La canción actual es de: ', cancion);
console.log('El autor es: ', autor);
// console.log('El autor es: ', detalles.autor);     // Ejemplo Sin extraer

/*
  Habilita la estraccion de propiedades y metodos de un objeto

  Desestructuracion:
  La desestructuracion es traer directamente las propiedades que nosotros nos interese de un objeto y 
  crear variables. Est manera es para desestructurar de manera limpia

  En const {} = reproductor; : Le decimos toma el objeto reproductor y me interesa las propiedades que hay
  definidas dentro. Estas propiedades van a ser constantes

*/

/*======= Desestructuracón de Arrays =======*/
const dbz: string[] = ["Goku", "Vegueta", "Broly"];
const [ , p2 , p3] = dbz;                 // Se deja vacío cuando no necesitemos un dato.
//console.log("Personaje 1: ", dbz[0]);   // Ejemplo normalmente
console.log("Personaje 2: ", p2);        // Aquí desestructuración
console.log("Personaje 3: ", p3);
/*
  Desestructuracion de Arrays:
  Crear diferentes variables basado en cada uno de los valores del array.
  Para desestructurar un objeto lo hacermos con llaves {}
  Para desestructuras un array lo hacemos con llaves []
  En la desestructuración de arrays es en orden como lo podemos ver, ya que importa 
  es la pocision de array, el const declarado es como si fuera el mismo array en orden 
  lo cual lospersonajes se definen en orden. 
*/



