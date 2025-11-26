function pedirLista (callback){

// AQUI ESTABA PONIENDO "NUMBER" LO CUAL ES INCORRECTO YA QUE CONVERTIA DIRECTAMENTE A NUMEROS Y EL CALL BACK DE "".SPLIT"
// NO SE EJECUTABA DE FORMA CORRECTA.

 let dato =  prompt("Por favor ingresa una lista de numeros separados por comas, ejemplo: 1, 2, 3, 4,...");
 return callback(dato);
}
var crearArray = (text) => {
  
  let array = text

// AQUI ESTABA PONIENDO ".SPLIT (" ")" LO QUE HIZO QUE LO DIVIDIERA POR ESPACION LO CUAL ESTABA INCORRECTO
// YA QUE EL USER LO ESTABA COLOCANDO CON COMAS.

  .split (",")
  .map (num => Number (num.trim()))
  return array
}
function filtrado (array){
  let array2 = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] > 20) {
      array2.push(array[i]);
    }
  }
  return array2;
}

function mostrarLista (array){
  for (let a = 0; a < array.length; a++){
    console.log(array[a]);
  }
}

// ESTA ESTRUCTURA DE CODIGO DEBO ESTUDIARLA YA QUE OLVIDE COMO HACERLA Y ES BASTANTE IMPORTANTE DOMINARLA.

let lista = pedirLista(crearArray);
let filtrados = filtrado(lista);
mostrarLista(filtrados);
