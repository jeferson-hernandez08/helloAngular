/*
    ===== Código de TypeScript =====
    ===== Aquí se Compila Cada Ejercicio ======¿
*/

/*======= Genéricos =======*/
function queTipoSoy<T>(argumento: T) {  // 
  return argumento;
}

let soyString = queTipoSoy("Hola Mundo Cruel !!");
let soyNumber = queTipoSoy(100);
let soyArray = queTipoSoy([1,2,3,4,5,6,7,8,9]);

let soyExplicito = queTipoSoy<number>(100);   // Para especificarle el tipo de dato que deseamos pasar

/*
    Generico es para mandar datos a usar diferentes tipos de datos que queramos usar y se usa con <T>
    Tipo genrico es cualquier tipo de dato que nosotros pasemos o algo implicito.
*/

