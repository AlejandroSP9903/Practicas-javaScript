/*Ejercicio en JavaScript que utiliza el método `reduce()` para contar cuántas veces aparece cada 
número dentro de un arreglo. El código construye un objeto donde cada clave representa un valor del 
arreglo y su correspondiente cantidad de ocurrencias. Sirve para practicar acumuladores, lógica de conteo 
y manejo de objetos dinámicos.
*/


let lista = [1, 1, 3, 4, 3, 4, 5, 2, 5, 2, 5, 5, 5, 5];

// EN ESTE EJERCICIO SE ME COMPLICO UN POCO YA QUE NO SABIA COMO HACER ESTE CONTEO, TUBE QUE BUSCAR EN INTERNET
// SIN EMBARGO NO SE POR QUE SE COMIENZA DESDE EL ELEMNETO "{}" Y NO DESDE EL "0"

function contarFrecuencias (array){
  let conteo = array.reduce((contador, elementoActual) => {
    if (contador[elementoActual]){
      contador[elementoActual] += 1;
    }else{
      contador[elementoActual] = 1;
    } 
    return contador;
  }, {});
  return conteo;
}


let resultado = contarFrecuencias(lista);
console.log(resultado);

//Debe imprimir: 1: 2, 2: 2, 3: 2, 4: 2, 5: 6.
