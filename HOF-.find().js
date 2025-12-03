/*Este ejercicio calcula el precio total de una lista de productos usando .reduce() y luego utiliza .find() para 
obtener el primer producto cuyo precio supera los 100.000. Además, se implementa una función personalizada myFind() 
para practicar la lógica detrás de .find(). Sin embargo, la versión creada se comporta como un .filter() porque 
retorna todos los elementos que cumplen la condición, en vez del primero, lo que ayuda a identificar qué ajustar 
para que funcione como un verdadero .find().
*/

let tabla = [
  {id: 1, nombre: "pantalla", precio: 120000},
  {id: 2, nombre: "mouse", precio: 78000},
  {id: 3, nombre: "teclado", precio: 50000},
  {id: 4, nombre: "cargador", precio: 40000}, 
]

let precioTotal = tabla.reduce((acumulador, elemento) => {
  return acumulador + elemento.precio;
}, 0);

console.log(precioTotal);

let encontrar = tabla.find(producto => {
  return producto.precio > 100000;
});

console.log (encontrar);

//ESTA FUNCION SE COMPORTA COMO EL ".FILTER()" Y NO COMO EL ".FIND" DE PRACTICAR MAS LA LOGICA DE "FIND ()"

function myFind (array, callback){
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++){
    let elemento = array[i];
    if (callback(elemento)){
      nuevoArray.push(elemento);
    }
  } return nuevoArray
}

let conMyFind = myFind(tabla, (precio) => precio.precio > 100000);

console.log(conMyFind);

/* Debe retornar: 
id:1
nombre:"pantalla"
precio:120000
*/

