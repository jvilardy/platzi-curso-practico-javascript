// Programa para el calculo de perimetro y area de funciones geometricas

// Codigo del Cuadrado
// console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
// console.groupEnd();

// Codigo del triangulo
// console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturatrinagulo = 5.5;

// console.log(
//     "Los lados del triangulo miden, Lado 1: " 
//     + ladoTriangulo1 
//     + "cm, lado 2: "
//     + ladoTriangulo2 
//     + "cm, la base: "
//     + baseTriangulo 
//     + "cm y la altura: "
//     + alturatrinagulo
//     + "cm"
//     );

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(baseTriangulo, alturatrinagulo) {
    return (baseTriangulo * alturatrinagulo)/2;
} 
// console.log("El area del triangulo es: " + areaTrinagulo + "cm^2");
// console.groupEnd();

// Codigo del circulo
// console.group("Circulos");
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
// console.log("El valor de PI es: " + PI);

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}

function perimetroCirculo(radioCirculo) {
    const diametro = diametroCirculo(radioCirculo);
    return diametro * PI;
} 
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * PI;
} 
// console.log("El area del circulo es: " + areaCirculo + "cm^2");
// console.groupEnd();

// Funciones para interactuar con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);    
}

// Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("inputLado1").value);
    const lado2 = Number(document.getElementById("inputLado2").value);
    const base = Number(document.getElementById("inputBase").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputBase").value;
    const altura = document.getElementById("inputaltura").value;

    const area = areaTriangulo(base, altura);
    alert(area);

}

// Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}

function calcularAreaCirculo() {
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);    
}