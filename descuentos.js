// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    return (precio * porcentajePrecioConDescuento)/100; 
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function calcularDescuentoPrecio() {
    const inputPrice = document.getElementById("inputPrice").value;

    const inputDisccount = document.getElementById("inputDisccount").value;

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDisccount);
    
    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "El precio del producto con descuento es: $" + precioConDescuento;
}