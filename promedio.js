const lista1 = [100, 200, 300, 500];

let sumalista1 = 0;

for(let i = 0; i < lista1.length; i++) {
    sumalista1 += lista1[i];  // sumalista1 = sumalista1 + lista1[i]
}

const promedioLista1 = sumalista1/lista1.length;


function calcularMediaAritmetica(lista) {
    // let sumalista = 0;

    // for(let i = 0; i < lista.length; i++) {
    //     sumalista += lista[i];  // sumalista = sumalista + lista[i]
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}