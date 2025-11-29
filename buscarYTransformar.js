/*Este ejercicio implementa una función de orden superior llamada buscarYTransformar, que recibe un array y 
dos callbacks: uno para encontrar un elemento según una condición y otro para transformarlo una vez encontrado. 
El programa demuestra cómo usar callbacks para separar la lógica de búsqueda y la de transformación, 
aplicando principios de programación funcional.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// EMPIEZO A ENTENDER MAS ESTA LOGICA, PARA LA PROXIMA PRACTICA INTENTARE SEGUIR REPASANDO ESTE MISMO TEMA

function buscarYTransformar(array, callbackfind, callbackTransformado){
  for ( let i = 0; i < array.length; i++){
    if (callbackfind(array[i])){
     return (callbackTransformado(array[i]))
    } 
  }return null;
}

let operar = buscarYTransformar(numeros,
(n) => n > 5,
(n) => n * 10
);

console.log(operar)
// Resultado esperado 60, ya que el primer numero mayor a 5 en el array es 6.



