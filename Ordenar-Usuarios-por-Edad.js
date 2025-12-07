/*Este ejercicio muestra cómo ordenar un arreglo de objetos utilizando el método sort() de JavaScript. 
Cada objeto representa un usuario con su nombre y edad. El código organiza la lista de usuarios de menor 
a mayor edad y luego imprime el resultado en consola. Es una práctica sencilla pero esencial para comprender 
el manejo de arrays y la comparación entre objetos.
*/

const users = [
  {nombre: "Luis", edad: 28},
  {nombre: "Pedro", edad: 19},
  {nombre: "Jorge", edad: 21},
  {nombre: "Daniela", edad: 27},
  {nombre: "Jose", edad: 18}
];

let ordenar = users.sort((a,b) => a.edad - b.edad);

console.log(ordenar)
