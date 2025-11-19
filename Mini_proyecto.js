let cantidad = Number(prompt("¿Cuantas notas quieres ingresar?"))
let suma = 0;
for (let i = 1; i <= cantidad; i++){
 let nota = Number(prompt("Ingresa la nota " + i + ":" ))
while (nota < 0 || nota > 5 || isNaN(nota))
nota = Number(prompt("Ingresaste un valor invalido, Recuerda las notas deben ir de 0 a 5.0, igresa la nota de nuevo."))
suma = suma + nota;
}
let promedio = suma / cantidad;
console.log("El promedio final para este corte es: " + promedio);