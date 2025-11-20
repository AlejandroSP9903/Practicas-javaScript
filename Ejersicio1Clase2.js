// Pide al usuario un número del 1 al 7 y muestra el día de la semana correspondiente.
// Si el usuario escribe algo inválido (como texto o un número fuera del rango), vuelve a pedirle el dato hasta que ingrese uno válido.

let dia = Number(prompt('Ingresa el numero(del 1 al 7) del dia que quieres ver...'));

// aqui cometi dos errores, puse el while antes del bloque de condicionales lo que evito que el
// bloque se leyera de nuevo si el usuario ponia un valor erroneo y luego ponea el que corresponde

while (dia > 7 || dia < 1 || isNaN(dia)) {
    dia = Number(prompt('Numero invalo. Ingresa un numero entre 1 y 7.'));
  }
if (dia == 1) {
  console.log('Lunes');
} else if (dia == 2) {
  console.log('Martes');
} else if (dia == 3) {
  console.log('Miercoles');
} else if (dia == 4) {
  console.log('Jueves');
} else if (dia == 5) {
  console.log('Viernes');
} else if (dia == 6) {
  console.log('Sabado');
} else {
  console.log('Domingo');
}
