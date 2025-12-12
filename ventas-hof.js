/*Ejercicios de análisis de ventas usando métodos de orden superior en JavaScript (map, filter, reduce). 
Incluye cálculos de totales, filtros por categoría y agrupación de ventas.
*/
const ventas = [
  { id: 1, producto: "Laptop", cantidad: 2, precioUnit: 3500000, categoria: "tecnologia" },
  { id: 2, producto: "Mouse", cantidad: 10, precioUnit: 40000, categoria: "tecnologia" },
  { id: 3, producto: "Gorra", cantidad: 5, precioUnit: 20000, categoria: "ropa" },
  { id: 4, producto: "Chaqueta", cantidad: 1, precioUnit: 150000, categoria: "ropa" },
  { id: 5, producto: "Monitor", cantidad: 3, precioUnit: 900000, categoria: "tecnologia" },
];

//Punto 1:
let stockXPrecio = ventas.map(v => ({
  id: v.id,
  producto: v.producto,
  categoria: v.categoria,
  totalVentas:v.cantidad * v.precioUnit}));
let filtro = stockXPrecio.filter(v => v.totalVentas > 200000);

console.log(filtro)

/* Imprime:
id:1
producto:"Laptop"
totalVentas:7000000
id:2
producto:"Mouse"
totalVentas:400000
id:5
producto:"Monitor"
totalVentas:2700000
*/

//Punto 2:

let filtroTech = ventas.filter(v => v.categoria === "tecnologia");
let nombresTech = filtroTech.map(v => v.producto);
console.log(nombresTech);
/*Imprime:
0:"Laptop"
1:"Mouse"
2:"Monitor"
*/

//Punto 3:

let ventasT = stockXPrecio.flatMap(v => v.totalVentas);
let totalVendido = ventasT.reduce((acc, item) => acc + item, 0);
console.log(totalVendido)

//Imprime: 10350000


//Punto 4:

//ESTE PUNTO ME COSTO BASTANTE HACERLO, NECESITO PRACTICAR ESTE TIPO DE LOGICA
// NO ENTIENDO MUY BIEN POR QUE FUNCIONA O COMO LO HACE

let agrupar = stockXPrecio.reduce((acc, item) =>{
  acc[item.categoria] = (acc[item.categoria] || 0) + item.totalVentas;
  return acc;
}, {});

let categoriaMasCostosa = Object.entries(agrupar).reduce(
  (max, item) =>{
    return item[1] > max[1] ? item:max
  }
);
console.log(categoriaMasCostosa)

//Punto 5:

let elMasVendido = ventas.reduce((max, item) =>{
  return (item.cantidad > max.cantidad) ? item: max;
});

console.log(elMasVendido);
