/*CREANDO UN SIMULADOR DE NOTAS*/


/*En este problema me piden que ingrese notas de acuerdo al profesor desea ingresar y sacar el promedio 
luego de eso mostra en que condiciones esta el alumno para que los maestros se puedan esforzar mas enseñando*/

let cantNotas = prompt('Ingrese cuantas notas desea registrar');
let i = 1;
let suma = 0;
let prom = 0;

while(i <= cantNotas){
    let notas = parseFloat(prompt(`Ingrese la nota ${i}`));
    suma = suma + notas;
    prom = suma/cantNotas;
    i++;
}

if(prom <= 10 && prom > 8){
    alert(`El alumno obtiene un promedio de ${prom} esta en estado optimo`);
}else if(prom <= 8 && prom > 5){
    alert(`El alumno obtiene un promedio de ${prom} esta en estado regular`);
}else if(prom <= 5 && prom > 0){
    alert(`El alumno obtiene un promedio de ${prom} esta en estado desaprobado mas esfuerzo`);
}
