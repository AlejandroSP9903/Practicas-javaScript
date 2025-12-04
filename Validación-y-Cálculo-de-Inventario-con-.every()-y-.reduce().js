/*Este ejercicio trabaja con un inventario de productos y aplica dos validaciones usando el método .every() 
para asegurar que todas las cantidades y precios sean mayores a cero.
Si los datos son válidos, el programa calcula el valor total del inventario utilizando .reduce() para sumar 
el subtotal de cada producto (precio × cantidad). Finalmente imprime las validaciones y el total calculado.

*/

let inventario = [
  {nombre: "cerveza", cantidad: 4, precio: 50000},
  {nombre: "cigarros", cantidad: 8, precio: 6500 },
  {nombre: "galletas", cantidad: 19, precio: 2000},
  {nombre: "whiskey", cantidad: 38, precio: 165000},
  {nombre: "vino", cantidad: 65, precio: 18000}
];

// LAS DOS VALIDACIONES SE PODIAN HACER EN SOLO UNA CON "&&" DENTRO DE
// LA MISMA VARIABLE.

let validacion = inventario.every(num => num.cantidad > 0);
let validacion2 = inventario.every(num => num.precio > 0);
console.log (validacion, validacion2);


function calcular (array, validacion, validacion2){
  if (!validacion || !validacion2){
    return 'Todos los datos deben ser mayores a 0 para poder continuar.'
  }
  let subTotal = array.reduce((contador, valor) =>{return contador + (valor.precio * valor.cantidad)}, 0);
  return subTotal;
}

let total = calcular(inventario, validacion, validacion2);

console.log (total);

/* DEBE IMPRIMIR: 
true
true
7730000
*/
