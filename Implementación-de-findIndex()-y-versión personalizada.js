/*Este ejercicio trabaja con un arreglo de productos y demuestra el uso del método .findIndex() para localizar posiciones según diferentes condiciones (ID, precio mayor o menor a un valor).
Además, incluye la creación de una función personalizada myFindIndex() que replica la lógica interna del método original, reforzando el entendimiento de callbacks y recorridos en arrays.
Finalmente, se incluye una sección de detección de errores comunes, mostrando por qué es necesario retornar explícitamente dentro del callback de findIndex().
*/

let productos = [
  {id: 1, producto: "arroz", precio: 5000},
  {id: 2, producto: "azucar", precio: 3500},
  {id: 3, producto: "frijo", precio: 4500},
  {id: 4, producto: "aceite", precio: 8500},
];


// BUSCAR ID 3

const encontrarID = productos.findIndex((producto) => producto.id === 3);

console.log (encontrarID);

// BUSCAR PRECIO MAYOR A 6000

const precioMayor = productos.findIndex((producto) => producto.precio > 6000);

console.log(precioMayor);

//BUCAR PRECIO MENOR A 1000

const precioMenor = productos.findIndex((producto) => producto.precio < 1000);

//AQUI RETORNA "-1" POR QUE ES UN ELEMNTO EL CUAL NO EXISTE EN EL ARREGLO
//YA QUE -1 ES UNA POCICION INVALIDAD, ES COMO EL UNDEFINED EN EL CASO DE ".FIND()"

console.log(precioMenor);

function myFindIndex (array, callback){
  for ( let i = 0; i < array.length; i++){
    let item = array[i];
    if (callback(item)){
      return i;
    }
  }return -1
}

let myVersion = myFindIndex(productos, (elemento) => elemento.precio > 8000);

console.log (myVersion);


/* IDENTIFICACION DE ERRORES:


let pos = productos.findIndex(p => {
  p.id === 2;
});

ESTO RETORNARIA "-1" POR QUE NO SE HACE EL RETURN DENTRO DEL PARENTECIS

*/

// SI LO RETORNAMOS QUEDARIA:

let pos = productos.findIndex(p => {
 return p.id === 2;
});

console.log(pos);

//O TAMBIEN SE PUEDE:

let pos2 = productos.findIndex((p) => 
  p.id === 2
);

console.log (pos2)

