/*Este ejercicio practica el método find() y muestra cómo funciona internamente recreándolo con la función personalizada myFind().
Se realizan varias búsquedas dentro de un arreglo de usuarios según diferentes condiciones (usuario activo, menor de 20 años, búsqueda por ID, etc.).
También incluye ejemplos de errores comunes, como olvidar el return dentro del callback.
*/

let users = [
  {id: 1, nombre: "Luis", edad: 28, activo: true},
  {id: 2, nombre: "Jorge", edad: 26, activo: true},
  {id: 3, nombre: "Daniel", edad: 22, activo: false},
  {id: 4, nombre: "Felipe", edad: 18, activo: false},
];

let primerActivo = users.find(user =>{
  return user.activo;
});

console.log(primerActivo);

let menorVeinte = users.find(user =>{
  return user.edad < 20;
});

console.log (menorVeinte);

//AQUI COMETI DE NUEVO UN ERROR YA QUE NO COLOQUE EL "." ENTRE ARRAY Y LENGTH
// DEBIDO A ESTO LA FUNCION NO SE EJECUTABA.

function myFind (array, callback){
  for ( let i = 0; i < array.length; i++){
    let elemento = array[i];
    if (callback(elemento)){
      return elemento;
    }
  }return undefined;
}

let myVersion = myFind(users, (dato) => dato.id === 3);

console.log(myVersion);


// COMO NO HAY UN USUARIO CON EDAD MAYOR A 50, NO ESTARIA DEFINIDO DENTRO DEL ARRAY
// POR ENDE RETORNA UNDEFINED.


let mayores = users.find(user =>{
  return user.edad > 50;
})

console.log (mayores)

let myVersionMayores = myFind (users, (datum) => datum.edad > 50);
console.log (myVersionMayores);


/* EJERCICIO PARA ENTRENAR EL OJO; 

let x = usuarios.find(u => {
  u.edad > 20
});

NO FUNCIONA POR QUE SE DEBE PONER "RETURN" YA QUE SIN ESTO RETORNA UNDEFINED
POR DEFECTO.
*/

// CON LLAVES SE RESUELVE ASI, SE DEBE RETORNAR DENTRO DE LAS LLAVES

let x = users.find((user) =>{ 
 return user.edad > 20
});

console.log(x)

// Y SIN LLAVES QUEDARIA ASI, NO SE PONE RETORNAR

let x2 = users.find((user) => 
 user.edad > 20
);

console.log(x2)
