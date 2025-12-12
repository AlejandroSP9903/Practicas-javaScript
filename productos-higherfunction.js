//Ejercicios con arrays usando filter, map y reduce para procesar un inventario.

const productos = [
  { id: 1, nombre: "Laptop", precio: 3500000, stock: 4, categoria: "tecnologia" },
  { id: 2, nombre: "Mouse", precio: 35000, stock: 0, categoria: "tecnologia" },
  { id: 3, nombre: "Gorra", precio: 40000, stock: 12, categoria: "ropa" },
  { id: 4, nombre: "Chaqueta", precio: 180000, stock: 2, categoria: "ropa" },
  { id: 5, nombre: "Monitor", precio: 800000, stock: 1, categoria: "tecnologia" },
];


let filtrado = productos.filter(v => v.stock > 0);

//AQUI DEBI SIMPLIFICAR EL .MAP YA QUE ESTO IMPRIMIME LA PALABRA "NOMBRE:" ANDTES DE CADA NOMBRES
/*Ejemplo:

let nombresDisponibles = filtrado.map(v => v.nombres);

MAS LIMPIO Y SOLO IMPRIME UN ARRAY CON NOMBRES SIN EL "NOMBRE:"
*/

let nombresDisponibles = filtrado.map(v => ({
  nombre: v.nombre
})
);

//AQUI HIZE UN FLATMAP QUE NO ERA NECESARIO, YA QUE SOLO CON EL ".MAP(V => TOTAL: V.PRECIO *  V.STOCK)" 
// ESTO LO HIZE YA QUE SIENTO QUE LA SINTAXIS ES MAS COMPLEJA DE LO QUE REALMENTE LO ES.

let precioXStock = filtrado
.map(v => ({
  total: v.precio * v.stock
}))
.flatMap(v => v.total)

let sumTotal = precioXStock.reduce((acc, item) => acc + item , 0);
console.log(sumTotal);

let masCaro = productos.reduce((max, item) => {
  return (item.precio > max.precio) ? item: max;
}, {nombre: "ninguno", precio: 0})

console.log(masCaro)

/*Deberia imprimir algo como:

15640000

id:1
nombre:"Laptop"
precio:3500000
stock:4
categoria:"tecnologia"

0:(1) {nombre: "Laptop"}
1:(1) {nombre: "Gorra"}
2:(1) {nombre: "Chaqueta"}
3:(1) {nombre: "Monitor"}
*/
