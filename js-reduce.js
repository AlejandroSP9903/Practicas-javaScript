//Ejercicios básicos e intermedios de reduce en JavaScript.

//Ejercicio 1

const ventas = [
  { producto: "Laptop", total: 7000000 },
  { producto: "Mouse", total: 400000 },
  { producto: "Teclado", total: 450000 }
];

let totalVentas = ventas.reduce((acc, item) =>acc + item.total, 0);
console.log(`El total de ventas fue; $${totalVentas}.`);

//Imprime: El total de ventas fue; $7850000.

//Ejercicio 2

const productos = [
  { nombre: "Laptop", categoria: "tecnologia" },
  { nombre: "Mouse", categoria: "tecnologia" },
  { nombre: "Gorra", categoria: "ropa" },
  { nombre: "Camisa", categoria: "ropa" },
  { nombre: "Teclado", categoria: "tecnologia" }
];

let contador = productos.reduce((acc, item) => {
  acc[item.categoria] =(acc[item.categoria] || 0) +1;
  return acc;
  }, {});
console.log(contador);

/*Imprime:
tecnologia:3
ropa:2 
*/

//Ejercicio 3

const ventas2 = [
  { categoria: "tecnologia", total: 3000000 },
  { categoria: "ropa", total: 200000 },
  { categoria: "tecnologia", total: 1500000 },
  { categoria: "ropa", total: 350000 }
];

//ESTE LO HIZE COPIANDO LA LOGICA DEL EJERCICIO ANTERIOR, CREO QUE LO ESTOY MEMORIZANDO Y ENTENDIENDO UN POCO MAS

let agrupar = ventas2.reduce((acc, item) => {
  acc[item.categoria] = (acc[item.categoria] || 0) + item.total;
  return acc 
}, {});
console.log(agrupar);

/*Imprime:
tecnologia:4500000
ropa:550000
*/
