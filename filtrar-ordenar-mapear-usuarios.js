/*Ejercicio práctico en JavaScript que trabaja con un arreglo de usuarios utilizando métodos de orden superior.
Incluye tres pasos fundamentales:
filter() para obtener solo los usuarios mayores de 20 años.
sort() para ordenar ese grupo por edad de menor a mayor.
map() para transformar cada usuario en un mensaje descriptivo.
*/

const users = [
  {nombre: "Luis", edad: 28},
  {nombre: "Pedro", edad: 19},
  {nombre: "Jorge", edad: 21},
  {nombre: "Daniela", edad: 27},
  {nombre: "Jose", edad: 18}
];

let filtrar = users.filter(value => value.edad > 20);

let ordenar = filtrar.sort((a,b) => a.edad - b.edad);
console.log(ordenar);

let mapear = ordenar.map((value) => {
  return value.nombre + ' tiene ' + value.edad + ' años.'
})

console.log(mapear);
