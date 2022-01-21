const lista1 = [100, 200, 500, 40000000];

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if(esPar(lista1.length)) { // numero de elementos par de lista1
    const elemento1 = Number(lista1[mitadLista1 - 1]);
    const elemento2 = Number(lista1[mitadLista1]);
    mediana = (elemento1 + elemento2)/2;
} else { // numero de elementos impar de lista1
    mediana = lista1[mitadLista1];
}