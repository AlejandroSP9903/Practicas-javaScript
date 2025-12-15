/* En este ejercicio me di cuenta lo complejo que puede llegar a ser reduce sin embargo debo seguir practicando hasta que lo domine,
ahora mismo este ejercicio lo hize pero me costo bastante terminarlo, no tengo la sintaxis de este reduce en la memoria lo dejare como una guia
mi futuras practicas.
*/

const productos = [
  { nombre: "Laptop", precio: 3500000, stock: 4 },
  { nombre: "Mouse", precio: 35000, stock: 0 },
  { nombre: "Monitor", precio: 1200000, stock: 3 }
];


let resultado = productos.reduce((acc, item) => {
  acc.totalInventario += item.stock * item.precio
  const valorActual =  item.precio * item.stock;
  if(acc.productoMasValioso === null ||
  valorActual > acc.productoMasValioso.precio * acc.productoMasValioso.stock){
    acc.productoMasValioso = item;
  }
  if (item.stock === 0){
    acc.productosSinStock.push(item.nombre);
  }
  return acc;
}, {
  totalInventario: 0,
  productoMasValioso: null,
  productosSinStock: []
}
);

console.log(resultado);
