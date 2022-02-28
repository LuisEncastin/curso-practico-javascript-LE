// Array

let lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
let lista1=[...lista];
document.getElementById("resultArray").innerHTML = lista1.toString() 

// Add number
function addNumber() {
    const input = document.getElementById("inputAddNumber");
    const value = input.value;

    lista1.push(value); 
    document.getElementById("resultArray").innerHTML = lista1.toString();
};
// Substract number
function substractNumber() {
    lista1.pop(); 
    document.getElementById("resultArray").innerHTML = lista1.toString();
};
// Aleatorio

function createRandomArray(){
    lista1 = []
    for (let i = 0; i < 11; i++) {
        let num = Math.floor(Math.random() * ((15+1) - 1) + 1);
        lista1.push(num); 
     }
    document.getElementById("resultArray").innerHTML = lista1.toString();
}

// clean
function cleanArray () {
    document.getElementById("resultArray").innerHTML = lista;
}

// Promedio

function calculateMean(array) {
    let sumaLista = 0;
    for (let i = 0; i < array.length; i++) {
      sumaLista = sumaLista + array[i];
    }
  
    const promedioLista = Math.floor(sumaLista / array.length);
    
    document.getElementById("resultMean").innerHTML = promedioLista;
  }

function cleanResultMean() {
    document.getElementById("resultMean").innerText = ' ';
}

// Mediana

function calcularMediana(array) {
    function calculateMedian(array) {
        const sumaLista = array.reduce(
          function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
          }
        );
        const promedioLista = sumaLista / array.length;
        return promedioLista;
      }
      
      const mitadarray = parseInt(array.length / 2);
      
      function esPar(numero) {
        if (numero % 2 === 0) {
          return true;
        } else {
          return false;
        }
      }
      
      let mediana;
      
      if (esPar(array.length)) {
        const elemento1 = array[mitadarray - 1];
        const elemento2 = array[mitadarray];
      
        const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2,
        ]);
        
        mediana = promedioElemento1y2;
      } else {
        mediana = array[mitadarray];
      }
    
      document.getElementById("resultMedian").innerHTML = mediana;
}

function cleanResultMedian() {
    document.getElementById("resultMedian").innerText = ' ';
}

// Moda

function calcularMode(array){
    
    let moda = array.sort((a,b) =>
            array.filter(v => v===a).length
        - array.filter(v => v===b).length
    ).pop();
   
    document.getElementById("resultMode").innerHTML = moda;
}

function cleanResultMode() {
    document.getElementById("resultMode").innerText = ' ';
}


  