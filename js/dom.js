 const tabla = document.getElementById("tabla")
 const filtrarServicio = document.getElementById("filtrarServicio")

 function cargarServicios(){
 let fila = ""
     servicios.forEach(servicio => {
         fila = `<tr>
                     <td>${servicio.nombre}</td>
                     <td>${servicio.precio}</td>
                 </tr>`   
                 tabla.innerHTML += fila
           
     });


 }
 function crearElementoHTML(){
     const parrafo = document.createElement("p")
         parrafo.id = "parrafo"
         parrafo.innerText = "La reserva esta sujeta a disponibilidad"
         parrafo.className = "parrafo"
         document.body.append(parrafo)
 }


cargarServicios()


