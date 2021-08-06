// Desarrollo del planteamiento (Lineas 1 a 48).

// function calcularMediaAritmetica (lista) {

//     const sumaLista = lista.reduce(
//         function (valorAcumulado = 0, nuevoElemento) {
//             return valorAcumulado + nuevoElemento;
//         }
//     );

//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;
// };

// const lista1 = [
//    100,
//    200,
//    500,
//    400000, 
// ];

// const mitadLista1 =parseInt(lista1.length/2);

// // Definir si es par
// function esPar(numerito) {
//     if (numerito % 2 === 0) {
//     return true;
// } else {
//     return false;
// };
// }
// //  Condicional para saber si la mediana es el número de enmedio o el promedio de ambas
// let mediana;

// if (esPar (lista1.length)) {
//     const elemento1 = lista1[mitadLista1-1];
//     const elemento2 = lista1[mitadLista1];

//     const promedioElemento1y2 =  calcularMediaAritmetica ([
//         elemento1,
//         elemento2,
//     ]);
//     mediana = promedioElemento1y2
// } else {
//     mediana = lista1[mitadLista1];
// }

// Tranformar en una funcióm
// Ordenar los datos del array.

// Variables, parámetros y argumentos

let mediana;

// Obtener Array

const inputLista = document.getElementById("inputLista");
const Lista = inputLista.value;

// Ordenar los elementos del array

lista.sort(function (a,b) {
    return a - b;
}) 

// Función para obtener la mediana
function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

// Obtener número que se encuentra a la mitad

const mitadLista =parseInt(lista.length/2);

// Definir si es par
function esPar(numerito) {
    if (numerito % 2 === 0) {
    return true;
} else {
    return false;
};
}

// Función para obtener la mediana

function sacarMediana(lista) {
    if (esPar (lista.length)) {
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 =  calcularMediaAritmetica ([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    };
    return sacarMediana;
}
