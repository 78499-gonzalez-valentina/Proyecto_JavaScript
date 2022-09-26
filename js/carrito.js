const limpiar = document.getElementById("limpiar")

function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
    let total = 0
        carrito.forEach(serv => {
            let fila = `<tr>
                            <td>${serv.nombre}</td>
                            <td>$ ${serv.precio * serv.quantity}</td>
                            <td> X${serv.quantity}</td>
                            <td><button class= "borrar" id="btn${serv.id}">-</button></td>
                        </tr>`

                        tabla.innerHTML += fila
                      
                        
         });  

}

recuperoCarrito()

// function eliminarServicio(array, id)
// {
    
//    //Buscar el indice del objeto con el id en el array
//     const objIndex = array.findIndex((obj) => obj.id == id);
//     array.splice(objIndex, 1);

//     return array; 
// }


// function eliminarServicioDelCarrito(id)
// {
//     let newCarrito = eliminarServicio(carrito, id)
//     recuperoCarrito()
// }

// function eliminarEnBotones()
// {
    
//     carrito.forEach(serv => {
//         const borrar = document.querySelector(`#btn${serv.id}`)
//         borrar.addEventListener("click", () => eliminarServicioDelCarrito(`${serv.id}`))
//     })
// }



