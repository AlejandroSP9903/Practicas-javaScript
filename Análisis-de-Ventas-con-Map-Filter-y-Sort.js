/*Este ejercicio toma un listado de productos vendidos y utiliza funciones de orden superior de JavaScript
para procesar la información. Primero se calcula el total generado por cada producto usando map(). Luego, se
filtran únicamente las ventas que superan los 100.000 pesos con filter(), y posteriormente se ordenan de mayor
a menor usando sort(). Finalmente, se genera un resumen en formato de texto que muestra cuánto dinero produjo cada
producto.
*/

const ventas = [
  { producto: "Cerveza", cantidad: 10, precioUnidad: 5000 },
  { producto: "Cigarros", cantidad: 5, precioUnidad: 6500 },
  { producto: "Galletas", cantidad: 20, precioUnidad: 2000 },
  { producto: "Whiskey", cantidad: 2, precioUnidad: 55000 },
  { producto: "Chocolate", cantidad: 12, precioUnidad: 3500 },
  { producto: "Vino", cantidad: 3, precioUnidad: 42000 }
];

const mapear = ventas.map((valor) => {
   let nuevo = valor.cantidad * valor.precioUnidad;
  return{
    ...valor,
    total: nuevo
  };
});

let filtrar = mapear.filter(value => value.total >= 100000);

let ordenar = filtrar.sort((a, b) => b.total - a.total);

const final = ordenar.map((value) => {
  return value.producto + ' generó ' + value.total + '$ en ventas'  
})

console.log(final);
