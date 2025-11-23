// AQUI YA EMPEZE A PROFUNDIZAR EN LOS CALLBACKS
// AUNQUE ENTIENDO MEJOR LA LOGICA DEL CALLBACK
//AUN ME FALTA ENTENDER COMO USAR ESTA ESTRUCTURA EN EJERCICIOS MAS COMPLEJOS
// DEBO SEGUIR PRACTICANDO HASTA PODER DOMINAR BIEN EL TEMA


function procesarNumero (callback){
    let dato = Number(prompt("Ingresa el numero a procesar."))
    return callback(dato);
}
function porDos (num){
  return num * 2;
}
function dividr (num){
  return num / 2;
}

// AQUI EL NUMERO NO SE CONVIERTE EN BINARIO YA QUE EL RESIDUO ES DECIMAL
// DEBIA USAR LA FUNCION MATH.FLOOR ()
function bin (num){
  let array = [];
  for(let i = 1; i < num; i){
    let rest = num % 2;
    num = num / 2;
    array.push(rest);
  }
  let unirArray = array.join("");
 return unirArray;
}

let  doblar = procesarNumero(porDos);
console.log("El doble del numero es: " + doblar);

let mitad = procesarNumero(dividr);
console.log("La mitad del numero es: " + mitad);

let binario = procesarNumero(bin);
console.log ("El binario del numero es: " + binario)
