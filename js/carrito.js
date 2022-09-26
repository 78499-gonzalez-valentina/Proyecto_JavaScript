const limpiar = document.getElementById("limpiar")
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function recuperoCarrito(carrito) {
    
    carrito = JSON.parse(localStorage.getItem("carrito"))
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

recuperoCarrito(carrito)

function eliminarServicio(array, id)
 {
    debugger
   //Buscar el indice del objeto con el id en el array
    const objIndex = array.findIndex((obj) => obj.id == id);
    array.splice(objIndex, 1);

    return array; 
 }


 function eliminarServicioDelCarrito(id)
 {
    debugger
    innerHTML = ""
     let newCarrito = eliminarServicio(carrito, id)
     localStorage.setItem("carrito", JSON.stringify(newCarrito))
     recuperoCarrito(newCarrito)
 }



 function eliminarEnBotones()
 {  
     carrito.forEach(serv => {
        const borrar = document.querySelector(`#btn${serv.id}`)
        borrar.addEventListener("click",  ()=> eliminarServicioDelCarrito(`${serv.id}`))
     })
     
 }

eliminarEnBotones()

