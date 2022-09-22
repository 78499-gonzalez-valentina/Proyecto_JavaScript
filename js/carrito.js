function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
        carrito.forEach(serv => {
            let fila = `<tr>
                            <td>${serv.nombre}</td>
                            <td>$ ${serv.precio}</td>
                        </tr>`
                        tabla.innerHTML += fila
        });
}
recuperoCarrito()