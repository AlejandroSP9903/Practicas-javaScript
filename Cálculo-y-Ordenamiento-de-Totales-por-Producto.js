/*Este ejercicio calcula el total por producto (precio × stock), genera un nuevo arreglo con esos valores, obtiene el valor 
total del inventario y ordena los productos según su valor total usando map, reduce y sort.
*/

const productos = [
  { nombre: "Medias", precio: 6000, stock: 3 },
  { nombre: "Boxer", precio: 5000, stock: 4 },
  { nombre: "Moñas", precio: 3500, stock: 11 },
  { nombre: "Pantaloneta", precio: 8500, stock: 4 },
  { nombre: "Camiseta", precio: 11000, stock: 16 }
];

//AQUI FUE INNECESARIO USAR DOS .MAP() YA QUE EN UNOS SOLO SE PODIA
// RESOLVER SIN NECESIDAD DE HACER UNO NUEVO CON LOS NUEVOS DATOS.

let nuevoArray = productos.map((value) => {
let nuevo = value.stock * value.precio;
return{
...value,
total: nuevo, nombre: value.nombre
}
});

let final = nuevoArray.map((valor) => {
  return{
    nombre: valor.nombre,
    total: valor.total
  }
});

console.log(final)

let valorTotal = nuevoArray.reduce((contador, item) => {
  return contador + item.total
}, 0);

console.log(valorTotal);

let ordenar = final.sort((a , b) => b.total - a.total);

console.log(ordenar);

/* DEBERIA IMPRIMIR:
286500
0:(2) {nombre: "Camiseta", total: 176000}
1:(2) {nombre: "Moñas", total: 38500}
2:(2) {nombre: "Pantaloneta", total: 34000...}
3:(2) {nombre: "Boxer", total: 20000}
4:(2) {nombre: "Medias", total: 18000} 
*/
