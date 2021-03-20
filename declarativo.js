let numeros=Array(1,2,3,4,5,6,7,8,9,10);
let sumatoria=0;

sumatoria=(numeros.filter(elementoArray=>elementoArray>5))
.reduce((suma,elementoArray)=>suma+elementoArray);

console.log(sumatoria);