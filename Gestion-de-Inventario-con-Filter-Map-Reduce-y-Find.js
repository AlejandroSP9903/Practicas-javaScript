/*Este ejercicio implementa un sistema básico de análisis de inventario utilizando métodos de alto orden (HOF) en JavaScript.
El código:

Filtra los productos con cantidad mayor a 10.

Transforma el inventario agregando un campo total (cantidad × precio) mediante map().

Calcula el valor total del inventario con reduce().

Busca un producto específico utilizando find().

Es un ejemplo práctico para comprender cómo combinar HOFs en un flujo real de procesamiento de datos.
*/

const inventario = [
  { nombre: "Cerveza", cantidad: 10, precio: 5000 },
  { nombre: "Cigarros", cantidad: 5, precio: 6500 },
  { nombre: "Galletas", cantidad: 20, precio: 2000 },
  { nombre: "Whiskey", cantidad: 2, precio: 165000 },
  { nombre: "Agua", cantidad: 15, precio: 1500 }
];

let filtrar = inventario.filter(value => value.cantidad > 10);
console.log (filtrar);

let nuevoArray = inventario.map(valor =>{
  let nuevo = valor.precio * valor.cantidad;
  return{
    ...valor,
  total:  nuevo
  }
})
console.log(nuevoArray);

let total = nuevoArray.reduce((contador, item) => {
  return contador + item.total
  // AQUI A REDUCE LE FALTABA EL VALOR INICIAR "0" PARA INICIALIZAARSE.
}, 0);
// AQUI HABIA ESCRITO CONOSOLE, ESTABA ROMPIENDO EL CODIGO.
console.log(total);

let encontrar = inventario.find(name => name.nombre === "Whiskey");

console.log(encontrar);
