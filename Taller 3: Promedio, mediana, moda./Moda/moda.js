// // Array inicial
// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1,
// ];

// // Pasar de array a objeto para contarlo con map

// const lista1Count = {};

//     lista1.map(
//         function(elemento){
//             if (lista1Count[elemento]){
//                 lista1Count[elemento] += 1;
//             } else {
//                 lista1Count[elemento]=1;
//             }
//         }
//     );

// // Pasar de objeto a array para poder organizarlo.

//     const lista1Array = Object.entries(lista1Count).sort(
//         function (valorAcumulado,nuevoValor) {
//            return valorAcumulado[1] - nuevoValor[1];
//         }
//     );

//     const moda = lista1Array[lista1Array.length-1];

// Función moda

    Function encontrarModa (lista){

    lista.map(
        function(elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento]=1;
            }
        };

    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado,nuevoValor) {
           return valorAcumulado[1] - nuevoValor[1];
        }:
    );

    return const moda = listaArray[listaArray.length-1];

    }
