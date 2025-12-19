/*This project demonstrates how to use JavaScript’s Array.prototype.reduce() to analyze a list of courses.
It calculates total courses, active and inactive counts, total revenue from active courses, aggregates data 
by category, and identifies the top-earning category — all in a single pass using reduce.
*/

const cursos = [
  { categoria: "JS", precio: 120000, activo: true },
  { categoria: "CSS", precio: 80000, activo: true },
  { categoria: "JS", precio: 100000, activo: false },
  { categoria: "HTML", precio: 60000, activo: true },
  { categoria: "CSS", precio: 70000, activo: false },
  { categoria: "JS", precio: 90000, activo: true }
];


let resultados = cursos.reduce((acc, item) =>{
acc.totalCursos += 1;
if (item.activo){
  acc.totalActivos += 1;
  acc.ingresosActivos += item.precio
}else{
  acc.totalInactivos += 1;
}
if(!acc.porCategoria[item.categoria]){
acc.porCategoria[item.categoria] = {cursos: 0, ingresos: 0};
};
acc.porCategoria[item.categoria].cursos += 1;
acc.porCategoria[item.categoria].ingresos += item.precio;

// IN THIS PART I USED THIS PART OF THE CODE AGAIN HERE TO GET THE TOTAL AMOUNT OF MONEY FO EACH CATEGORY.
// I DO NOT IF THIS IS CORRECT OR IF THIS LEAVE A CODE WEEKNESS

if(acc.categoriaTop.precio < acc.porCategoria[item.categoria].ingresos){
acc.categoriaTop.nombre = item.categoria;
acc.categoriaTop.precio = acc.porCategoria[item.categoria].ingresos
};
return acc
},{totalCursos: 0, totalActivos: 0, totalInactivos: 0, 
ingresosActivos: 0, porCategoria: {},
categoriaTop: {nombre:"", precio:0}});

console.log(resultados)

/* Imprime:
totalCursos:6
totalActivos:4
totalInactivos:2
ingresosActivos:350000
porCategoria:(3) {JS: {...}, CSS: {...}, HTML: {...}}
JS:(2) {cursos: 3, ingresos: 310000}
CSS:(2) {cursos: 2, ingresos: 150000}
HTML:(2) {cursos: 1, ingresos: 60000}
categoriaTop:(2) {nombre: "JS", precio: 310000}
nombre:"JS"
precio:310000
*/
