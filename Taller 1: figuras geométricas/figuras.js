// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
};

// console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm*2");

function areaCuadrado (lado) {
    return lado * lado;
}; 
// console.log("El área del cuadrado es: " + areaCuadrado + "cm*3")

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " 
// // + ladoTriangulo1 
// // + "cm, " 
// // + ladoTriangulo2 
// // + "cm, " 
// // + baseTriangulo 
// // + "cm");

// // const alturaTriangulo = 5.5;
// // console.log("La altura del triángulo es de: " +  alturaTriangulo)

function perimetroTriangulo(lado1, lado2, base) {
    return lado1+lado2+base;
};

// const perimetroTriangulo = + ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm*2");

function areaTriangulo (baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
};

// console.log("El área del triángulo es: " + areaTriangulo + "cm*3");

console.groupEnd();

// Código del Círculo
console.group("Círculo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo (radio) {
    return radio * 2;
};
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio) 
    return diametro * PI;
}; 
// console.log("La circunferencia del círculo es: " + perimetroCirculo + "cm");

// Área
function areaCirculo (radio) {
    return (radio*radio)*PI;
};
// console.log("El área del círculo es: " + areaCirculo + "cm*2");

console.groupEnd();

// Aquí interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value); 
    alert(perimetro);
};
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value); 
    alert(area);
};
// Triángulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const valueLado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const valueLado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase); 
    alert(perimetro);
};
function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura); 
    alert(area);
};
// Círculo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value); 
    alert(perimetro);
};
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value); 
    alert(area);
};
