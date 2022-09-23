const limpiar = document.getElementById("limpiar")

function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
        carrito.forEach(serv => {
            let fila = `<tr>
                            <td>${serv.nombre}</td>
                            <td>$ ${serv.precio}</td>
                            <td> X${serv.quantity}</td>
                            <td><button id="btn${serv.id}">-</button></td>
                        </tr>`

                        tabla.innerHTML += fila

        });
    
    
    
}
recuperoCarrito()


