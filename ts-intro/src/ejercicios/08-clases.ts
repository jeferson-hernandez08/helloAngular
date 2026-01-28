/*
    ===== Código de TypeScript =====
    ===== Aquí se Compila Cada Ejercicio ======¿
*/

/*======= Clases Básicas ======= | ======= Constructor de una Clase ======= | ======= Extender una Clase (Herencia padre a hijo) ======= */
class PersonaNormal {

  constructor (
    public nombre:string, 
    public direccion:string
  ) {}

}

class Heroe extends PersonaNormal {    // Heroe es el hijo de PersonaNormal
  // alterEgo: string;
  // edad: number;
  // nombreReal: number;

  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal?: string
  
  ) {
    super( nombreReal, "NY - Gran Manzana");
  }
}

// Creamos la instancia
const ironman = new Heroe("Iron Man", 40, "Tony");     // Le mandamos los argumentos al contructor
console.log(ironman);

/*
    Son muy parecidas a las clases de JS.

    Diferencias entre private, public y static:
      - Private: Significa que esa propiedad solo va ser visible dentro de esa clase Heroe
      - Public: Significa que afuera de la clase Heroe alguien va poder ver esa propiedad.
      - static: Significa que que podemos acceder al valor de esa propiedad sin crear una instancia de la clase
  
      Más en el word
    
    Constructor de la Clase:
    El constructor de la clase es una funcion que se va a llamar cuando se crea una instancia de mi clase, donde
    el new Heroe(); hace referencia la constructor donde con el constructor podemos inicializar las propiedades
    de mi clase. 

    NOTA : Muy importante que cuando NO usamos el this. estamos usando el parametro y argumento que se está enviando y
    si usamos el this. estamos usando la instancia creada de la clase

      Más en Word.

    Extender una Clase (Herencia padre a hijo):
    Super: Debemos de tener la llamada del super , el super es para llaamr al constructor del padre 
    Super llama a l constructor del padre  

      Más en Word.


*/
