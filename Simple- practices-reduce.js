//ejercicio 1
const palabras = ["react", "js", "react", "html", "js", "react"];

let contador = palabras.reduce((acc, item) =>{ 
 //AQUI LO QUE HICE FUE COLOCAR EL ITEM Y EN CADA RECORRIDO SUMARLE 
 // + 1 SI SE CUMPLE EL VALOR DEL ITEM
acc[item] = (acc[item] ?? 0) + 1;
return acc;
//EL RESULTADO ES UN OBJETO ASQI QUE SE INICIA CON OBJECT {}
}, {});

console.log(contador);

//ejercicio 2

const numeros = [1, 2, 3, 4, 5, 6];
//CON EL CONDICIONAL HACEMOS SE EVALUE SI CUMPLE Y ASI EMPUJARLO AL
// ARRAY CORRESPONDIENTE
let separador = numeros.reduce((acc, item) =>{
  if( item % 2 === 0){
    acc.pares.push(item);
  }else{
    acc.impares.push(item);
  }
  return acc
//AQUI SE RETORNA UN OBJETO DE ARRAYS, ASI QUE INCIALIZAMOS CON UN OBJETO
},{pares:[], impares:[]});

console.log(separador);

//Ejercicio 3
//
const acciones = [
  { type: "increment", value: 2 },
  { type: "decrement", value: 1 },
  { type: "increment", value: 3 }
];

let operaciones = acciones.reduce((acc, item) => {
//AQUI USAMOS DE NUEVO EL CONDICIONAL PARA AUMENTAR SI SE CUMPLE Y SI NO RESTAR
// EN ESTE CASO DEBEMOS REEMPLAZAR EL VALOR DE ACC, POR EL RESULTADO USANDO -= O +=
if (item.type === "increment"){
  acc += item.value;
}else {
  acc -= item.value;
}
return acc;
// SE RETORNA UN NUMERO, ASI QUE EL VALOR INICIAL DEBERA SER 0
}, 0);

console.log(operaciones)

//Ejercicio 4

//CON ESTE EJERCICIO PUDE NOTAR MI PROGRESO ACTUAL CON ESTAS VERSIONES DE REDUCE SIMPLES
//SIN EMBARGO DEBO ENFOCARME EN REDUCE MAS COMPLEJOS PARA LLEGAR CON BUEN KNOWLEDGE A REACT
const edades = [18, 22, 17, 30, 15, 40];

let mayoresMenores = edades.reduce((acc, item) => {
if (item >= 18){
  acc.mayores.push(item);
}else{
  acc.menores.push(item)
}return acc;
},{menores:[], mayores:[]});

console.log(mayoresMenores);
