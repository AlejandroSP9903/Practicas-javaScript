/*Ejercicios prácticos en JavaScript usando el método Array.prototype.reduce() para:
Calcular el valor total de un inventario (precio × stock)
Agrupar ventas por categoría y sumar totales
Identificar el producto con mayor valor total en inventario
Incluye ejemplos claros de acumulación, agrupación y comparación usando reduce.
*/

//Ejercicio 1
const productos = [
  { nombre: "Laptop", precio: 3500000, stock: 4 },
  { nombre: "Mouse", precio: 35000, stock: 2 },
  { nombre: "Teclado", precio: 90000, stock: 6 }
];

let totalInventario = productos.reduce((acc, item) => {
  return acc + item.precio * item.stock
}, 0);

console.log(totalInventario)

//Ejercicio 2

const ventas = [
  { categoria: "tech", total: 3000000 },
  { categoria: "ropa", total: 200000 },
  { categoria: "tech", total: 1500000 },
  { categoria: "ropa", total: 350000 }
];

let agrupar = ventas.reduce((acc, item) => {
  acc[item.categoria] = (acc[item.categoria] || 0) + item.total;
  return acc;
}, {});

console.log(agrupar);

//Ejercicio 3:

const productos2 = [
  { nombre: "Laptop", precio: 3500000, stock: 4 },
  { nombre: "Mouse", precio: 35000, stock: 20 },
  { nombre: "Monitor", precio: 1200000, stock: 3 }
];

let elMasCaro = productos2.reduce((max, item) =>{
  return item.precio * item.stock > max.precio * max.stock ? item:max;
});

console.log(elMasCaro)
