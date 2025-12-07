/*El programa imprime el total del inventario y el objeto correspondiente al producto encontrado. Este ejercicio 
refuerza conceptos clave como manipulación de arrays, HOF (Higher Order Functions) y callbacks en JavaScript.
*/

const productos = [
  { id: 1, nombre: "Pan", precio: 2000 },
  { id: 2, nombre: "Leche", precio: 3500 },
  { id: 3, nombre: "Huevos", precio: 12000 },
  { id: 4, nombre: "Queso", precio: 8000 }
];

let total = productos.reduce((contador, currentProduct)=>{
return contador + currentProduct.precio;
}, 0);

console.log(total)

let encontrar = productos.find(elemento => elemento.nombre === "Huevos");

console.log(encontrar);

/* Debe imprimir:
25500
id:3
nombre:"Huevos"
precio:12000
*/
