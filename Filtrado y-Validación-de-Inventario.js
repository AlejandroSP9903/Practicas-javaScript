/*Ejercicio que procesa una lista de productos usando filter, every y some para validar stock disponible, 
verificar precios mínimos y detectar si existe inventario crítico.
*/
const items = [
  {nombre: "Medias ", precio: 6000 , stock: 3 },
  {nombre: "Boxer ", precio: 5000 , stock: 4 },
  {nombre: "Moñas ", precio: 3500 , stock: 11 },
  {nombre: "Pantaloneta ", precio: 8500 , stock: 4 },
  {nombre: "Camiseta ", precio: 11000 , stock: 16 }
];

let filtrar = items.filter(value => value.stock > 5);
console.log(filtrar);

let precioMayor = filtrar.every(value => value.precio > 6000);
console.log(precioMayor);

let hayStock = items.some(value => value.stock <= 2);
console.log (hayStock)

/*Debe imprimir:
0:(3) {nombre: "Moñas ", precio: 3500, sto...}
nombre:"Moñas "
precio:3500
stock:11

1:(3) {nombre: "Camiseta ", precio: 11000,...}
nombre:"Camiseta "
precio:11000
stock:16

false
false
*/
