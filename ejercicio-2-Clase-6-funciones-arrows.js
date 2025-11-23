/*Pidas por prompt una frase completa.
La función principal (procesarFrase) recibe un callback que transformará la frase.
El callback debe ser una arrow function que haga lo siguiente:
Convertir la frase a un arreglo de palabras.
Capitalizar la primera letra de cada palabra.
Volver a unir todo en una sola cadena.
*/

function procesarFrase (callback){
  let dato = prompt("Ingresa la frase a procesar.");
  return callback (dato);
}

//IN THIS PART I HAD SOME SINTAX ERRORS, SINCE Y PUT ";", AFTER "RETURN TEXT", THIS BREAK THE LOGIC AND 
// THE CODE WONT RUN FURTHER, AND ALSO I WROTE SOME WORDS IN A WRONG WAY
// AFTER ".MAP" WE MUST PUT THE ARGUMENT "TEXT" BEFORE THE ".CHARAT(0)"

const frase = (text) => {
  return text
    .toLowerCase ()
    .split(" ")
    .map(palabra=>
    palabra.charAt(0).toUpperCase() + palabra.slice(1)
    )
    .join(" ");
};
console.log(procesarFrase(frase));
