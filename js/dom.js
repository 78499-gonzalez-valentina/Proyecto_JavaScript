const tabla = document.getElementById("tabla")
const inputFiltrar = document.getElementById("inputFiltrar")
const servicios = [];
const carrito = [];


class Servicio {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        
    }
}

function generarServicios() {
    servicios.push(new Servicio( 545,"SELFIETAG", 2000))
    servicios.push(new Servicio(412, "CABINA DE FOTOS", 5000))
    servicios.push(new Servicio(874, "SOUVENIR", 300))
 
}

generarServicios()
 
 function cargarServicios(array){
 let fila = ""
     array.forEach(servicio => {
         fila = `<tr>
                     <td>${servicio.id}</td>
                     <td>${servicio.nombre}</td>
                     <td>${servicio.precio}</td>
                     <td><button id="btn${servicio.numero}">+</button></td>
                 </tr>`   
                 tabla.innerHTML += fila
           
     });


 }

 cargarServicios(servicios)

 function crearElementoHTML(){
     const parrafo = document.createElement("p")
         parrafo.id = "parrafo"
         parrafo.innerText = "La reserva esta sujeta a disponibilidad"
         parrafo.className = "parrafo"
         document.body.append(parrafo)
 }





function filtrarServicios() { //FILTRAR PRODUCTOS EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    debugger
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = servicios.filter(servicio => servicio.nombre.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarServicios(servicios)
              } else {
                cargarServicios(resultado)
              }
    }
    else {
        cargarServicios(servicios)
    }
}

inputFiltrar.addEventListener("input", filtrarServicios) //A medida que escribimos.