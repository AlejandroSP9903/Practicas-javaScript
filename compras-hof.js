/*Ejemplo práctico de métodos de orden superior en JavaScript (filter, reduce y find) aplicados a una 
lista de compras.
El script filtra los productos de la categoría "comida", calcula el total de sus precios y localiza un 
producto específico (“Carne”). Útil para practicar manipulación de arrays y funciones HOF.
*/

const compras = [
  { categoria: "aseo", nombre: "Jabón", precio: 2500 },
  { categoria: "aseo", nombre: "Shampoo", precio: 8200 },
  { categoria: "comida", nombre: "Arroz", precio: 3000 },
  { categoria: "comida", nombre: "Carne", precio: 15000 },
  { categoria: "comida", nombre: "Frijoles", precio: 4000 }
];


let filtrar = compras.filter(categoria => categoria.categoria === "comida");
console.log(filtrar);

let totalComida = filtrar.reduce((contador, valorActual) => {
  return contador + valorActual.precio;
}, 0);

console.log(totalComida)

let encontrar = compras.find(producto => producto.nombre === "Carne");

console.log(encontrar);

/*Debe imprimir:
const compras = [
  { categoria: "aseo", nombre: "Jabón", precio: 2500 },
  { categoria: "aseo", nombre: "Shampoo", precio: 8200 },
  { categoria: "comida", nombre: "Arroz", precio: 3000 },
  { categoria: "comida", nombre: "Carne", precio: 15000 },
  { categoria: "comida", nombre: "Frijoles", precio: 4000 }
];

22000

categoria:"comida"
nombre:"Carne"
precio:15000
*/
