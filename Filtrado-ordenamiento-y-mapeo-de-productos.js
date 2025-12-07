/*Este ejercicio toma una lista de productos y aplica tres métodos de orden superior de JavaScript:
filter() para obtener los productos cuyo precio es mayor o igual a 5000.
sort() para ordenarlos de menor a mayor según su precio.
map() para extraer únicamente los nombres de los productos filtrados y ordenados.
*/

const productos = [
  { nombre: "Pan", precio: 2000 },
  { nombre: "Leche", precio: 3500 },
  { nombre: "Huevos", precio: 12000 },
  { nombre: "Carne", precio: 15000 },
  { nombre: "Queso", precio: 8000 }
];

const filtrar = productos.filter(value => value.precio >= 5000);
const ordenar = filtrar.sort((a, b) => a.precio - b.precio );
const mapear = ordenar.map((value) => {
  return value.nombre;
}) 

console.log(mapear)
