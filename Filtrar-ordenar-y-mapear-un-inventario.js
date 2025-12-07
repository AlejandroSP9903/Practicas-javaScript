/*Ejercicio práctico donde se trabaja con un arreglo de productos utilizando métodos de ordenamiento, filtrado y mapeo.
El código toma una lista de artículos, intenta ordenarlos, filtra los que superan cierto precio y finalmente genera 
mensajes descriptivos usando map().
Este ejercicio sirve para reforzar el manejo de arrays, callbacks y funciones de orden superior en JavaScript.
*/

const items = [
  { nombre: "Cerveza", precio: 5000, stock: 10 },
  { nombre: "Cigarros", precio: 6500, stock: 5 },
  { nombre: "Galletas", precio: 2000, stock: 20 },
  { nombre: "Whiskey", precio: 55000, stock: 2 },
  { nombre: "Chocolate", precio: 3500, stock: 12 },
  { nombre: "Vino", precio: 42000, stock: 3 }
];

// AQUI OLVIDE COLOCAR EL "b.precio y el a.precio"

let ordenar = items.sort((a,b) => b.precio - a.precio);

// AQUI PODIA USAR ".slice()" YA QUE YA ESTABAN ORDENADOS DE MENOR A MAYOR, SOLO ERA MOSTRAR EL RANGO DE 0-2

let filtrar = ordenar.filter(value => value.precio > 6000);

const mapear = filtrar.map((value) => {
  return value.nombre + ' cuesta ' + value.precio + '$ y quedan ' + value.stock + ' unidades.';
})

console.log(mapear)

/*Deberia imprimir: 
0:"Cigarros cuesta 6500$ y quedan 5 unidades."
1:"Whiskey cuesta 55000$ y quedan 2 unidades."
2:"Vino cuesta 42000$ y quedan 3 unidades."
*/
