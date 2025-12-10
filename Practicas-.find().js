// Practicas .find()

//Ejercicio # 1

const productos = [
  { nombre: "Cerveza", precio: 5000, stock: 10 },
  { nombre: "Cigarros", precio: 6500, stock: 5 },
  { nombre: "Galletas", precio: 2000, stock: 20 },
  { nombre: "Licor", precio: 12000, stock: 4 },
  { nombre: "Papas", precio: 3000, stock: 8 }
];

// AQUI IMPRIME UNDEFINED, YA QUE NO HAY NINGUN VALOR QUE SEA MAYOR A 8000 DENTRO DE FILTER

const filtrar = productos.filter(value => value.stock > 5);
const encontrar = filtrar.find(value => value.precio > 8000);
console.log(encontrar);

// ejercicio # 2

const usuarios = [
  { id: 1, nombre: "Ana", compras: 2, activo: true },
  { id: 2, nombre: "Luis", compras: 5, activo: false },
  { id: 3, nombre: "Carla", compras: 4, activo: true },
  { id: 4, nombre: "Mario", compras: 1, activo: true },
  { id: 5, nombre: "Daniel", compras: 6, activo: false }
];

let filtrado = usuarios.filter (active => active.activo === true);
let mapear = filtrado.map((value) =>({
id: value.id,
nombre: value.nombre,
compras: value.compras
})
);

const masCompras = mapear.find(value => value.compras > 3);

console.log(masCompras);
/* Deberia imprimir:
id:3
nombre:"Carla"
compras:4
*/


// Ejercicio # 3
const productos2 = [
  { nombre: "Laptop", precio: 2000000, stock: 3 },
  { nombre: "Mouse", precio: 40000, stock: 0 },
  { nombre: "Teclado", precio: 90000, stock: 6 },
  { nombre: "Monitor", precio: 600000, stock: 2 },
  { nombre: "USB", precio: 20000, stock: 10 }
];

const filtrar2 = productos2.filter(value => value.stock > 0);
const mapear2 = filtrar2.map(valor => ({
  nombre: valor.nombre,
  valorTotal: valor.precio * valor.stock
})
);

const sumatoria = mapear2.reduce((contador, item) => {
  return contador + item.valorTotal
}, 0);

let promedio = sumatoria / mapear2.length;

const mayorAlPromedio =  mapear2.find(num => num.valorTotal > promedio);

console.log(sumatoria, mayorAlPromedio);

/* Deberia imprimir:
7940000
nombre:"Laptop"
valorTotal:6000000 
*/
