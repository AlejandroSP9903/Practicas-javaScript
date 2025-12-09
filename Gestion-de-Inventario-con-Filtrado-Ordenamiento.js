/*Pequeño script que trabaja con un inventario de productos aplicando métodos de orden superior como filter, 
sort, map y reduce. El ejercicio incluye filtrado por precio, ordenamiento por valor, cálculo del valor total 
por producto y errores comunes comentados para reforzar buenas prácticas al manipular datos en JS.
*/

const inventario = [
  { nombre: "Cerveza", precio: 5000, stock: 10, categoria: "licor" },
  { nombre: "Cigarros", precio: 6500, stock: 5, categoria: "varios" },
  { nombre: "Galletas", precio: 2000, stock: 20, categoria: "comida" },
  { nombre: "Whiskey", precio: 55000, stock: 2, categoria: "licor" },
  { nombre: "Agua", precio: 1500, stock: 25, categoria: "bebida" }
];

// EN EL EJERCICIO ME PEDIAN ORGANIZAR POR STOCK Y NO POR PRECIO, DEBO TENER 
// ESTO EN CUENTA PARA EVITAR ERRORES EN EL MUNDO REAL.

let filtro = [...inventario].filter(num => num.precio > 3000);
let ordenar = filtro.sort((a, b) => b.precio - a.precio);

let nuevoArray = inventario.map((value) => {
  return{
    nombre: value.nombre, valorTotal: value.precio * value.stock
  }
});

// AYER VI QUE USANDO ESTO EVITAMOS QUE EL ARRAY SE MODIFIQUE "[...nuevoArray].reduce"
//*AQUI COMETI OTRO ERROR YA QUE ME PEDIAN SACAR EL TOTAL DEL FILTRADO, NO DE TODO EL ARRAY* 

let total = [...nuevoArray].reduce((contador, currentItem) =>{
return contador + currentItem.valorTotal 
}, 0);


let elMasCaro = [...ordenar].reduce((contador) => contador);

const respuestas = {
  filtro,
  ordenar,
  nuevoArray,
  total,
  elMasCaro
};


console.log(respuestas);
