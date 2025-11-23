/*Crea un programa que:
Pida por prompt una lista de palabras separadas por comas.
Ejemplo:
"perro, GATO, casa, ARBOL"
La función principal (procesarLista) recibirá un callback que se encargará de procesar la lista.
El callback (arrow function) debe:
Quitar espacios de más.
Pasar todo a minúsculas.
Capitalizar cada palabra.
Ordenarlas alfabéticamente.
Devolver el array final.
Muestra el resultado con console.log(...).
*/


// AQUI COMETI UN ERROR YA QUE EL PARAMETRO QUE USE ERA "TEXT" Y EL QUE PUSE EN RETURN FUE "CALLBACK",
// ESTO EVITO QUE EL CODIGO CORRIERA

function procesarLista (callback){
let dato = prompt("Ingrese la lista de palbras a revisar.")
return callback(dato)
}

//AQUI COMETI VARIOS ERRORES YA QUE EL ".TRIM ()" DEBIA USARSE DENTRO DE ".MAP" YA QUE LO ESTABA USANDO DEPUES DE ".SPLIT(,)"
// ESO SOLO FUNCIONA CON TEXTO NO CON ARRAYS

var revisar = (text) => {
return text
.toLowerCase()
.split(",")
.sort()
.map(palabra=>
palabra.charAt(0).toUpperCase() + palabra.slice(1).trim())
}

console.log (procesarLista(revisar));
