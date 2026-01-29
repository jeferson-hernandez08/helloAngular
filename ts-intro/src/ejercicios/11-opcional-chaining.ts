/*
    ===== Código de TypeScript =====
    ===== Aquí se Compila Cada Ejercicio ======¿
*/

/*======= Encadenamiento Opcional =======*/
interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia','Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos( pasajero1 );

/*
    Debemos evaluar los hijos con ?, el signo de ? es muy importante
    Cualquier propiedad o cualquier variable no definida en JS tiene el valor de undefined.
    En const cuantosHijos = pasajero.hijos?.length || 0; estamos diciendo con ? que evalua si tienes los hijos,
    en este caso que no tiene hijos va poner 0 en lugar de undefined
*/





