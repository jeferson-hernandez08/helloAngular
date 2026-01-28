/*
    ===== Código de TypeScript =====
    ===== Aquí se Compila Cada Ejercicio ======
                    ⚠
*/

/*======= Desestructuracón de Argumentos =======*/
export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia A1',
  precio: 150
}

const tableta:Producto = {
  desc: "Ipad Air",
  precio: 350
}

export function calculaISV( productos: Producto[] ):[number, number] {    // ISV: Impuesto sobre venta

  let total = 0;
  productos.forEach(({ precio }) => {    // ⚠ Aquí La de Desestructuración viene   ( producto ) y total += producto.precio;
    total += precio;
  })

  return [total, total * 0.15];    // Aqui podemos regresar un arreglo

}

const articulos = [telefono, tableta];

const [ total, isv] = calculaISV( articulos );

console.log('Total:', total);
console.log('ISV:', isv);


/*
  Desestructuracón de Argumentos:
  En (({ precio }) viene la desestruccturación, con las llaves desestructuramos de ese objeto desestructuramos
  todas las propiedades que nos interesan
  ⚠
  

*/




