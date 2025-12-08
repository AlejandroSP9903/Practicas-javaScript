/*Ejercicio que filtra, ordena y calcula totales de un inventario usando filter, map, reduce, sort, find, 
every y some. Ideal para practicar manipulación de datos en JavaScript.
Si quieres otra versión más técnica o más casual, te la preparo.
*/
const productos = [
  { nombre: "Medias", precio: 6000, stock: 3, categoria: "accesorio" },
  { nombre: "Boxer", precio: 5000, stock: 4, categoria: "ropa" },
  { nombre: "Moñas", precio: 3500, stock: 11, categoria: "accesorio" },
  { nombre: "Pantaloneta", precio: 8500, stock: 4, categoria: "ropa" },
  { nombre: "Camiseta", precio: 11000, stock: 16, categoria: "ropa" }
];

let filtrar = productos.filter (value => value.stock <= 5);

let mapear = productos.map((value) => {
  return{
    nombre: value.nombre,
    categoria: value.categoria,
    total: value.stock * value.precio
  }
});

console.log(mapear);

const total = mapear.reduce((contador, item) => {
  return contador + item.total;
}, 0);

console.log(total);

let ordenar = mapear.sort((a, b) => b.total - a.total);

let ordenarPrecios = productos.sort ((a, b)=> b.precio - a.precio);

let masBarato = ordenarPrecios.find((item, index)=> {
  return index === 4 
  });

console.log(masBarato);

const valeMasDe = productos.every(value => value.precio > 3000);

console.log(valeMasDe);

const stockCritic = productos.some(value => value.stock <= 2);

console.log (stockCritic);
