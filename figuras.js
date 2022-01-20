// Programa para el calculo de perimetro y area de funciones geometricas

// Codigo del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturatrinagulo = 5.5;

console.log(
    "Los lados del triangulo miden, Lado 1: " 
    + ladoTriangulo1 
    + "cm, lado 2: "
    + ladoTriangulo2 
    + "cm, la base: "
    + baseTriangulo 
    + "cm y la altura: "
    + alturatrinagulo
    + "cm"
    );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTrinagulo = (baseTriangulo * alturatrinagulo)/2;
console.log("El area del triangulo es: " + areaTrinagulo + "cm^2");
console.groupEnd();

// Codigo del circulo
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();